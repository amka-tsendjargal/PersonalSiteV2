'use client'

import { useEffect, useState } from "react"
import FormStatus from "./FormStatus"
import Reveal from "./Reveal"

const FIELD_CLASS = "bg-white/[0.08] rounded-lg px-4 py-[13px] text-sm text-white placeholder:text-white/50 border-0 outline-none focus:ring-1 focus:ring-white/30"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [company, setCompany] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [status, setStatus] = useState(null)

    async function onSubmit(event) {
        event.preventDefault()
        setSubmitting(true)
        setStatus(null)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({ name, email, message, company })
            })

            if (response.ok) {
                setName("")
                setEmail("")
                setMessage("")
                setStatus("success")
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        } finally {
            setSubmitting(false)
        }
    }

    useEffect(() => {
        if (!status) return
        const timer = setTimeout(() => setStatus(null), 4000)
        return () => clearTimeout(timer)
    }, [status])

    return (
        <Reveal>
            <div id="contact" className="px-5 pt-14 pb-16 md:px-14 md:pt-[70px] md:pb-[90px]">
                <div className="max-w-[1160px] mx-auto">
                    <h1 className="text-2xl md:text-[30px] font-bold text-ink mb-3">Let&apos;s work together</h1>
                    <p className="text-white/60 text-base mb-8 max-w-[420px]">Have a project in mind, or just want to say hi? Drop me a note.</p>
                    <form onSubmit={onSubmit} className="flex flex-col gap-[14px] max-w-[440px]">
                        <input
                            type="text"
                            name="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="hidden"
                        />
                        <input
                            type="text"
                            placeholder="Your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={FIELD_CLASS}
                        />
                        <input
                            type="email"
                            placeholder="Email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={FIELD_CLASS}
                        />
                        <textarea
                            placeholder="Message"
                            required
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`${FIELD_CLASS} h-[70px] resize-none`}
                        />
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-accent text-white px-[26px] py-[13px] rounded-lg text-sm font-semibold w-fit mt-[6px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:pointer-events-none"
                        >
                            {submitting ? "Sending..." : "Send message"}
                        </button>
                        <FormStatus status={status} />
                    </form>
                    <div className="mt-16 md:mt-[70px] pt-6 border-t border-white/[0.12] text-[13px] text-white/40">
                        &copy; Amka Tsendjargal {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </Reveal>
    )
}
