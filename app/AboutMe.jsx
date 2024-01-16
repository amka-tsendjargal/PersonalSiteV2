import ExternalLinks from "./ExternalLinks";

export default function AboutMe() {
    return (
        <div id="about" className="flex w-screen md:min-h-screen">
            <div className="flex flex-col md:flex-row gap-2 md:items-center w-full md:h-screen py-28 md:px-28">
                <div className="md:flex md:flex-col px-5 w-1/2">
                    <h1 className="text-6xl">About</h1>
                    <h1 className="text-6xl mb-10">Me</h1>
                    <div className="hidden md:block">
                        <ExternalLinks />
                    </div>
                </div>
                <div className="flex flex-col px-5 md:w-1/2">
                    <h1 className="text-base xl:text-3xl font-medium">I am a software developer based in</h1>
                    <h1 className="text-base xl:text-3xl font-medium mb-4">Calgary, Alberta.</h1>
                    <h1 className="text-sm md:text-base xl:text-2xl mb-4">My previous background is in Astrophysics from the University of Calgary, which is also where I was introduced to programming for the first time.</h1>
                    <h1 className="text-sm md:text-base xl:text-2xl mb-4">Now I&apos;m enrolled in the Object-Oriented Software Development program at SAIT, <strong>currently looking for internship and junior roles.</strong> In my free time, I&apos;m either working on personal project or planning the next one.</h1>
                    <h1 className="text-sm md:text-base xl:text-2xl mb-10 md:mb-4">When I&apos;m not at the computer, I&apos;m usually playing volleyball or being a nuiscence to my dog.</h1>
                    <div className="md:hidden">
                        <ExternalLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}