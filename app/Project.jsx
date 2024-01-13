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
        <div className={`flex items-center h-screen w-full p-28 ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className="w-1/2">
                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
                        <img src={demoImage} className="h-[156px] md:h-[278px] w-full rounded-xl" alt="" />
                    </div>
                </div>
                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center p-20">
                <h1 className="text-3xl font-bold mb-5">{title}</h1>
                <h1 className="text-xl text-gray-700 mb-5">{description}</h1>
                <StackLabel labels={stack}/>
                <h1 className="text-xl mt-5">
                    <a href={projectLink} className="underline decoration-sky-500">Link that leads to GitHub or actual site</a>
                </h1>
            </div>
        </div>
        


    )
}