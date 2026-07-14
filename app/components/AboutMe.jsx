import ExternalLinks from "./ExternalLinks";
import Reveal from "./Reveal";
import Image from "next/image";

export default function AboutMe() {
    return (
        <Reveal>
            <div id="about" className="px-5 py-12 md:px-14 md:py-[70px]">
                <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row gap-8 md:gap-14 md:items-center">
                    <div
                        className="relative overflow-hidden w-[170px] h-[170px] md:w-[220px] md:h-[220px] rounded-2xl flex-shrink-0 flex items-center justify-center font-mono text-[11px] text-muted text-center"
                        style={{ background: "repeating-linear-gradient(135deg, var(--hairline), var(--hairline) 8px, var(--canvas) 8px, var(--canvas) 16px)" }}
                    >
                        <Image src="/linkedin-headshot.png" alt="LinkedIn headshot" fill className="object-cover" sizes="220px" />
                    </div>
                    <div className="max-w-[640px]">
                        <div className="text-accent text-[13px] font-semibold uppercase tracking-[0.06em] mb-[10px]">About</div>
                        <div className="flex flex-col gap-4 text-[15px] md:text-[17px] leading-relaxed md:leading-[1.7]">
                            <p>My path here started in physics, not code. During my B.Sc. in Astrophysics at the University of Calgary,a CS elective turned into the thing I actually wanted to do.</p>
                            <p>That detour led me to the Object-Oriented Software Development program at SAIT, and from there to an internship at OGL Engineering that turned into a full-time <strong>Software Developer</strong> role. These days I&apos;m building internal tools and PWAs, with the occasional flight-route optimizer thrown in.</p>
                            <p>Outside of work, I&apos;m usually on a volleyball court or losing an argument with my dog.</p>
                        </div>
                        <div className="mt-6">
                            <ExternalLinks />
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}
