import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request) {
    const { name, email, subject, message, company } = await request.json()

    // Honeypot: real visitors never fill this hidden field.
    if (company) {
        return NextResponse.json({ message: "Success." }, { status: 200 })
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        // Sending from Resend's shared sandbox address is fine here since the
        // destination is always your own verified inbox. Switch to a custom
        // verified domain only if you need to send to other addresses.
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: subject || `New message from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
        })
        return NextResponse.json({ message: "Success." }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Failed." }, { status: 500 })
    }
}
