import ExternalLinks from "./ExternalLinks";

export default function AboutMe() {
    return (
        <div id="about" className="flex w-screen min-h-screen">
            <div className="flex flex-row items-center w-full h-screen p-28">
                <div className="w-1/2">
                    <h1 className="text-6xl">About</h1>
                    <h1 className="text-6xl mb-10">Me</h1>
                    <ExternalLinks />
                </div>
                <div className="flex flex-col w-1/2">
                    <h1 className="text-3xl font-medium">I am a software developer based in</h1>
                    <h1 className="text-3xl font-medium mb-4">Calgary, Alberta.</h1>
                    <h1 className="text-2xl mb-4">My previous background is in Astrophysics from the University of Calgary, which is also where I was introduced to programming for the first time.</h1>
                    <h1 className="text-2xl mb-4">Now I&apos;m enrolled in the Object-Oriented Software Development program at SAIT, currently looking for internship and junior roles. In my free time, I&apos;m either working on personal project or planning the next one.</h1>
                    <h1 className="text-2xl mb-4">When I&apos;m not at the computer, I&apos;m usually playing volleyball or being a nuiscence to my dog.</h1>
                </div>
            </div>
        </div>
    )
}