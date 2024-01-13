import Project from "./Project";

export default function ProjectsSection() {
    return (
        <div id="projects" className="flex flex-col items-center w-screen min-h-screen">
            <Project title={"Spotify to YT Music Playlist Sync App"} 
                     stack={["TypeScript", "Next.js", "Spotify API", "OAuth 2.0", "Tailwind"]}
                     description={"A web application that allows you to transfer your Spotify playlists to your YouTube Music library."}
                     projectLink="https://github.com/Aiden-W1224/playlistProject"/>
            <Project title={"Travel Agency Full Stack Web App"}
                     stack={["C#", "ASP.NET Core", "MSSQL", "Bootstrap"]}
                     description={"A travel agency website that allows customers to register and login, allowing users to view products/packages offered by the agency as well as view their past purchases and transactions."}
                     projectLink="https://github.com/amka-tsendjargal/Workshop5"
                     reverse={true}/>
        </div>
    )
}