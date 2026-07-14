import Image from "next/image"

export default function Project({ title, description, demoImage, projectLink }) {
    return (
        <div className="flex flex-col md:flex-row gap-5 md:gap-[26px] bg-panel backdrop-blur-md rounded-xl p-5 md:p-6 border border-hairline transition-shadow hover:shadow-[0_0_24px_rgba(120,170,255,0.25)]">
            <div className="relative w-full h-[180px] md:w-[220px] md:h-[150px] rounded-lg overflow-hidden flex-shrink-0">
                {demoImage && <Image src={demoImage} alt={`${title} screenshot`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 220px" />}
            </div>
            <div>
                <div className="text-lg md:text-[19px] font-bold">{title}</div>
                <div className="text-sm md:text-[15px] text-muted mt-2 leading-relaxed md:leading-[1.55] max-w-[600px]">{description}</div>
                <a href={projectLink} className="inline-block text-[13px] text-accent font-semibold mt-[14px]">
                    View project →
                </a>
            </div>
        </div>
    )
}
