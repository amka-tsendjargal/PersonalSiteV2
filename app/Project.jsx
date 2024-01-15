import Image from "next/image"
import StackLabel from "./StackLabel"
export default function Project({
    title,
    stack,
    description,
    demoImage = "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png",
    projectLink = "https://github.com/amka-tsendjargal?tab=repositories",
    reverse = false
}) {
    return (
        <div className={`lg:flex items-center h-screen w-full p-28 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
                        <img src={demoImage} className="object-scale-down h-[156px] md:h-[278px] w-full rounded-xl" alt="" />
                    </div>
                </div>
                <div className="relative mx-auto mb-10 lg:mb-0 bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                </div>
            </div>
            <div className="lg:w-1/2 lg:max-h-full lg:flex lg:flex-col justify-center lg:p-20">
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-5">{title}</h1>
                <h1 className="text-sm xl:text-xl text-gray-700 mb-5">{description}</h1>
                <StackLabel labels={stack}/>
                <h1 className="text-sm xl:text-xl mt-5">
                    <a href={projectLink} class="text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">GitHub</a>
                </h1>
            </div>
        </div>
        


    )
}