import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');
    const mobile = searchParams.get('mobile');
    const date = searchParams.get('date');
    const time = searchParams.get('time');

    if (!name || !mobile || !date || !time) {
        return NextResponse.json({ message: 'Invalid Link' }, { status: 400 });
    }

    // Initialize Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromPhone = process.env.TWILIO_PHONE_NUMBER;

    // SMS Message
    const messageBody = `Hello ${name}, your appointment at PhysioCare on ${date} at ${time} is CONFIRMED. Please arrive 10 mins early.`;

    try {
        if (accountSid && authToken && fromPhone) {
            const client = twilio(accountSid, authToken);
            await client.messages.create({
                body: messageBody,
                from: fromPhone,
                to: mobile.startsWith('+') ? mobile : `+91${mobile}`, // Assuming IN, adjustable
            });
            console.log(`SMS Sent to ${mobile}: ${messageBody}`);
        } else {
            console.log('--- TWILIO MOCK SMS ---');
            console.log(`To: ${mobile}`);
            console.log(`Body: ${messageBody}`);
            console.log('--- CREDENTIALS MISSING ---');
        }

        // Return HTML Success Page
        return new NextResponse(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Appointment Confirmed</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body class="bg-green-50 flex items-center justify-center min-h-screen font-sans">
                <div class="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center border border-green-100">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 class="text-3xl font-black text-slate-800 mb-2">Confirmed!</h1>
                    <p class="text-slate-600 mb-6 font-medium">
                        SMS notification has been sent to <strong>${mobile}</strong>.
                    </p>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left mb-6">
                        <p class="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Patient</p>
                        <p class="text-lg font-bold text-slate-800 mb-3">${name}</p>
                        <p class="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Time</p>
                        <p class="text-lg font-bold text-slate-800">${date} @ ${time}</p>
                    </div>
                    <a href="/" class="block w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition">Return to Home</a>
                </div>
            </body>
            </html>
        `, {
            headers: { 'Content-Type': 'text/html' },
        });

    } catch (error) {
        console.error('Twilio Error:', error);
        return NextResponse.json({ message: 'Failed to send SMS' }, { status: 500 });
    }
}
