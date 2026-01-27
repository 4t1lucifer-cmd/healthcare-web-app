import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory store for rate limiting
// Note: In a serverless environment (Vercel), this memory is ephemeral per lambda.
// For strict global rate limiting, use Redis (e.g., Upstash).
// However, this provides a "good enough" layer for basic bot protection without extra infra costs.
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute per IP

export function middleware(request: NextRequest) {
    // Only apply to the contact API
    if (request.nextUrl.pathname.startsWith('/api/contact')) {
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

        const now = Date.now();
        const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

        // Reset window if passed
        if (now - record.lastReset > RATE_LIMIT_WINDOW) {
            record.count = 0;
            record.lastReset = now;
        }

        record.count++;
        rateLimitMap.set(ip, record);

        if (record.count > MAX_REQUESTS) {
            return NextResponse.json(
                { message: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
};
