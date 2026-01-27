import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');
    const email = searchParams.get('email'); // Now getting email
    const date = searchParams.get('date');
    const time = searchParams.get('time');

    if (!name || !email || !date || !time) {
        return NextResponse.json({ message: 'Invalid Link: Missing details' }, { status: 400 });
    }

    // Configure Nodemailer (Reusing same credentials)
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER || 'mock_user',
            pass: process.env.EMAIL_PASS || 'mock_pass',
        },
    });

    try {
        if (!process.env.EMAIL_USER) {
            console.log('--- MOCK CONFIRMATION EMAIL ---');
            console.log(`To: ${email}`);
            console.log(`Subject: Appointment Confirmed: ${date} @ ${time}`);
            console.log('-------------------------------');
        } else {
            // Send Email to Patient
            await transporter.sendMail({
                from: '"PhysioCare Admin" <bookings@physiocare.com>',
                to: email,
                subject: '✅ Appointment Confirmed - PhysioCare',
                html: `
                    <div style="font-family: sans-serif; padding: 30px; color: #1e293b; background-color: #f8fafc; border-radius: 12px;">
                        <div style="text-align: center; margin-bottom: 24px;">
                            <h2 style="color: #0d9488; font-size: 24px; margin: 0;">Appointment Confirmed!</h2>
                        </div>
                        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            Hello <strong>${name}</strong>,<br><br>
                            Your appointment request has been successfully confirmed by our team.
                        </p>
                        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                            <p style="margin: 5px 0;"><strong>📅 Date:</strong> ${date}</p>
                            <p style="margin: 5px 0;"><strong>⏰ Time:</strong> ${time}</p>
                            <p style="margin: 5px 0;"><strong>🏥 Location:</strong> PhysioCare Clinic</p>
                        </div>
                        <p style="font-size: 14px; color: #64748b;">
                            Please arrive 10 minutes early. If you need to reschedule, reply to this email.
                        </p>
                    </div>
                `
            });
            console.log(`Confirmation Email Sent to ${email}`);
        }

        // Return HTML Success Page for Admin
        return new NextResponse(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Confirmation Sent</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body class="bg-blue-50 flex items-center justify-center min-h-screen font-sans">
                <div class="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center border border-blue-100">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h1 class="text-3xl font-black text-slate-800 mb-2">Email Sent!</h1>
                    <p class="text-slate-600 mb-6 font-medium">
                        Confirmation email has been sent to <br><strong>${email}</strong>
                    </p>
                    <a href="/" class="block w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition">Return to Home</a>
                </div>
            </body>
            </html>
        `, {
            headers: { 'Content-Type': 'text/html' },
        });

    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ message: 'Failed to send Confirmation Email' }, { status: 500 });
    }
}
