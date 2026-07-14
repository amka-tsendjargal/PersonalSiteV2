import Project from "./Project";
import Reveal from "./Reveal";

const PROJECTS = [
    {
        title: "Spotify to YT Music Playlist Sync App",
        description: "A web application that allows you to transfer your Spotify playlists to your YouTube Music library, using OAuth 2.0 to authorize and move playlists and songs between the two services.",
        demoImage: "/playlistapp.png",
        projectLink: "https://github.com/Aiden-W1224/playlistProject",
    },
    {
        title: "Project Volleague",
        description: "A stealth start up.",
        demoImage: "",
        projectLink: "#"
    }
]

export default function ProjectsSection() {
    return (
        <Reveal>
            <div id="projects" className="scroll-mt-[88px] px-5 py-10 md:px-14 md:py-16">
                <div className="max-w-[1160px] mx-auto">
                    <div className="text-accent text-[13px] font-semibold uppercase tracking-[0.06em] mb-6">Selected work</div>
                    <div className="flex flex-col gap-5">
                        {PROJECTS.map((project) => (
                            <Project key={project.title} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </Reveal>
    )
}
