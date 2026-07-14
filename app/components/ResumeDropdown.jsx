'use client'

import { useEffect, useRef, useState } from "react"

export default function ResumeDropdown() {
    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        function onClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", onClickOutside)
        return () => document.removeEventListener("mousedown", onClickOutside)
    }, [])

    return (
        <div className="relative w-fit" ref={containerRef}>
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="cursor-pointer bg-accent text-white px-6 md:px-[26px] py-3 md:py-[13px] rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
                Resume
            </button>
            {open && (
                <ul className="absolute top-full mt-2 w-40 bg-panel backdrop-blur-md border border-hairline rounded-lg shadow-lg py-2 flex flex-col z-30">
                    <li>
                        <a className="block px-4 py-2 text-sm text-ink hover:text-accent" href="/amka_tsendjargal.docx" target="_blank" onClick={() => setOpen(false)}>.docx</a>
                    </li>
                    <li>
                        <a className="block px-4 py-2 text-sm text-ink hover:text-accent" href="/amka_tsendjargal.pdf" target="_blank" onClick={() => setOpen(false)}>.pdf</a>
                    </li>
                </ul>
            )}
        </div>
    )
}
