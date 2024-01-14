import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(request) {
    const {name, email, subject, message} = await request.json()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.HOST_EMAIL,
            pass: process.env.PASS
        }
    })

    const mailOptions = {
        from: {name: name, address: email},
        to: process.env.HOST_EMAIL,
        subject: subject,
        text: message
    }

    try {
        await transport.sendMail(mailOptions);
        return NextResponse.json({message: "Success.", status: 200})
    } catch (err) {
        return NextResponse.json({message: 'Failed.', status: 500})
    }
}