import ResumeDropdown from "./ResumeDropdown"

export default function Hero() {
    return (
        <div id="hero" className="relative z-10 scroll-mt-[88px] px-5 pt-16 pb-14 md:px-14 md:pt-[110px] md:pb-[90px] animate-[fadeUp_0.7s_ease_both]">
            <div className="max-w-[1160px] mx-auto">
                <div className="max-w-[640px]">
                    <div className="text-sm font-semibold text-accent mb-[18px]">Hey, I&apos;m Amka 👋</div>
                    <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight md:tracking-[-0.02em] leading-[1.1] md:leading-[1.08]">
                        I build software to solve real problems.
                    </h1>
                    <p className="text-base md:text-lg text-muted mt-4 md:mt-[22px] max-w-[520px] leading-relaxed md:leading-[1.5]">
                        Software developer based in Calgary, Alberta, with a background in astrophysics. I care about user value, adoption, and retention. It's not just about shipping features, but making sure people actually use and benefit from them.
                    </p>
                    <div className="flex flex-wrap gap-3 md:gap-[14px] mt-8 md:mt-9">
                        <ResumeDropdown />
                        <a
                            href="#contact"
                            className="border border-hairline px-6 md:px-[26px] py-3 md:py-[13px] rounded-lg text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
