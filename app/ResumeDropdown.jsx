import Script from "next/script"
export default function ResumeDropdown() {
    return (
        <div className='relative'>
            <button className="bg-sky-600 p-2 font-bold text-gray-100 rounded-md peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200  ">Download Resume</button>
            <div className=' w-80 absolute top-5 z-10
            after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/40
            after:w-full after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
            peer-focus:top-12 peer-focus:opacity-100 peer-focus:visible 
            transition-all duration-300 invisible  opacity-0 
            '>
                <ul className='py-6 px-3 flex flex-col gap-3'>
                    <li className='cursor-pointer bg-sky-300 p-3 rounded-md hover:opacity-90 text-white'><a className="block" href="/resume_amka.docx" target="_blank">.docx</a></li>
                    <li className='cursor-pointer bg-blue-300 p-3 rounded-md hover:opacity-90 text-white'><a className="block" href="/resume_amka.pdf" target="_blank">.pdf</a></li>
                </ul>
            </div>
        </div>
    )
}