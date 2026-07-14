export default function FormStatus({ status }) {
    if (!status) return null

    if (status === "success") {
        return <p className="text-sm text-emerald-400">Message sent — thanks for reaching out, I&apos;ll get back to you soon.</p>
    }

    return <p className="text-sm text-red-400">Something went wrong. Please try again in a moment.</p>
}
