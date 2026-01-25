import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Input Validation Schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters").max(2000),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
    time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format"),
    service: z.string().min(1, "Service is required"),
});

// Helper for simple sanitization
const sanitize = (str: string) => str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}[m] || m));

export async function POST(req: Request) {
    try {
        const json = await req.json();

        // Validate input
        const result = contactSchema.safeParse(json);
        if (!result.success) {
            return NextResponse.json({
                message: 'Validation Error',
                errors: result.error.flatten().fieldErrors
            }, { status: 400 });
        }

        const { name, email, message, date, time, service } = result.data;
        const sanitizedMessage = sanitize(message);

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER || 'mock_user',
                pass: process.env.EMAIL_PASS || 'mock_pass',
            },
        });

        const mailOptions = {
            from: '"PhysioCare Booking" <bookings@physiocare.com>',
            to: 'nadimraza0123@gmail.com',
            subject: `New Appointment: ${service} - ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 30px; color: #1e293b; background-color: #f8fafc; border-radius: 12px;">
                    <h2 style="color: #0d9488; margin-bottom: 24px; border-bottom: 2px solid #0d9488; padding-bottom: 12px;">New Appointment Request</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px 0; font-weight: bold;">Patient:</td><td>${sanitize(name)}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td>${service}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Preferred:</td><td>${date} at ${time}</td></tr>
                    </table>
                    <div style="margin-top: 24px;">
                        <p style="font-weight: bold; margin-bottom: 8px;">Message/Symptoms:</p>
                        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.6;">
                            ${sanitizedMessage.replace(/\n/g, '<br/>')}
                        </div>
                    </div>
                </div>
            `,
        };

        if (!process.env.EMAIL_USER) {
            console.log('--- MOCK EMAIL ALERT ---');
            console.log('To:', mailOptions.to);
            console.log('Body:', mailOptions.html);
            console.log('------------------------');
        } else {
            await transporter.sendMail(mailOptions);
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

