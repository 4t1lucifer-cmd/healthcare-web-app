import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message, date, time, service } = body;

        // Create a transporter
        // NOTE: In a production environment, you would use real SMTP credentials
        // For now, we'll log the details and set up a transporter that can be configured via environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER || 'mock_user',
                pass: process.env.EMAIL_PASS || 'mock_pass',
            },
        });

        const mailOptions = {
            from: '"PhysioCare Booking" <bookings@physiocare.com>',
            to: 'nadimraza0123@gmail.com',
            subject: `New Appointment Booking: ${service} - ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #2dd4bf;">New Appointment Request</h2>
                    <p><strong>Patient Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Service Requested:</strong> ${service}</p>
                    <p><strong>Preferred Date:</strong> ${date}</p>
                    <p><strong>Preferred Time:</strong> ${time}</p>
                    <p><strong>Message/Symptoms:</strong></p>
                    <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
                        ${message}
                    </div>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 0.8em; color: #666;">This is an automated alert from your PhysioCare website.</p>
                </div>
            `,
        };

        // In this environment, we'll simulate the send if credentials aren't provided
        if (!process.env.EMAIL_USER) {
            console.log('--- MOCK EMAIL ALERT ---');
            console.log('To:', mailOptions.to);
            console.log('Subject:', mailOptions.subject);
            console.log('Body:', mailOptions.html);
            console.log('------------------------');
        } else {
            await transporter.sendMail(mailOptions);
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
