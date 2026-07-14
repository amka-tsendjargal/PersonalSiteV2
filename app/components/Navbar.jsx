'use client'

import { useState } from "react"

const LINKS = [
    { href: "#projects", label: "Work" },
    { href: "#about", label: "About" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-20 bg-panel backdrop-blur-md border-b border-hairline">
            <div className="px-5 py-5 md:px-14 md:py-6">
            <div className="max-w-[1160px] mx-auto flex flex-wrap justify-between items-center">
                <a href="#hero" className="flex items-center" onClick={() => setOpen(false)}>
                    <picture>
                        <source srcSet="/logo-sm.png" media="(max-width: 768px)" />
                        <source srcSet="/logo.png" />
                        <img src="/logo.png" className="h-8 invert" alt="Amka Tsendjargal" />
                    </picture>
                </a>
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-tint focus:outline-none focus:ring-2 focus:ring-hairline"
                    aria-controls="navbar-default"
                    aria-expanded={open}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5 text-ink" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:flex md:w-auto md:items-center ${open ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="flex flex-col mt-4 gap-3 md:mt-0 md:flex-row md:items-center md:gap-7">
                        {LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="block py-1 text-sm text-muted hover:text-accent transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="block py-1 text-sm text-muted hover:text-accent transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    )
}
