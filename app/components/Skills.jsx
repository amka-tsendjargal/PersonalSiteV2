import Reveal from "./Reveal"

const SKILLS = ["Python", "TypeScript", "JavaScript", "React", "Next.js", "C#", ".NET", "PHP", "SQL", "Git", "Docker"]

export default function Skills() {
    return (
        <Reveal>
            <div id="skills" className="scroll-mt-[88px] px-5 py-10 md:px-14 md:py-16">
                <div className="max-w-[1160px] mx-auto">
                    <div className="text-accent text-[13px] font-semibold uppercase tracking-[0.06em] mb-5">Skills</div>
                    <div className="flex flex-wrap gap-[10px]">
                        {SKILLS.map((skill) => (
                            <div key={skill} className="px-4 py-[9px] border border-hairline rounded-full text-sm">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Reveal>
    )
}
