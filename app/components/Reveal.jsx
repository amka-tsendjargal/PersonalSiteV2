'use client'

import { useEffect, useRef, useState } from "react"

export default function Reveal({ children, className = "" }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    io.unobserve(el)
                }
            },
            { threshold: 0.15 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`transition-all duration-[600ms] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
        >
            {children}
        </div>
    )
}
