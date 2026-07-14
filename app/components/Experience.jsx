import Reveal from "./Reveal"

const EXPERIENCE = [
    { role: "Software Developer", company: "OGL Engineering", years: "Jun 2025 — Now" },
    { role: "Software Developer Intern", company: "OGL Engineering", years: "Feb 2025 — Jun 2025" },
]

export default function Experience() {
    return (
        <Reveal>
            <div id="experience" className="scroll-mt-[88px] px-5 py-10 md:px-14 md:py-16">
                <div className="max-w-[1160px] mx-auto">
                    <div className="text-accent text-[13px] font-semibold uppercase tracking-[0.06em] mb-6">Experience</div>
                    <div className="flex flex-col">
                        {EXPERIENCE.map((entry) => (
                            <div key={entry.role + entry.years} className="flex flex-col md:flex-row gap-1 md:gap-6 py-5 border-b border-hairline">
                                <div className="w-[130px] flex-shrink-0 text-[13px] text-muted md:pt-[2px]">{entry.years}</div>
                                <div>
                                    <div className="text-base md:text-[17px] font-bold">{entry.role}</div>
                                    <div className="text-sm text-muted mt-1">{entry.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Reveal>
    )
}
