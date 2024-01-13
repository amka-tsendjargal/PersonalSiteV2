'use client'
import Script from "next/script"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import ResumeDropdown from "./ResumeDropdown";
export default function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['Software Developer^1000', 'Software Student^1000', 'Software Engineer?^1500'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 150,
        smartBackspace: true,
        showCursor: true,
        loop: true
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);
    return (
        <div id="hero" className="flex flex-col gap-3 justify-center w-full min-h-screen p-28">
            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">Amka Tsendjargal </h1>
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl min-h-[58px]"><span ref={el} className="min-h-[58px]"></span></h2>
            <ResumeDropdown />
        </div>
    )
}