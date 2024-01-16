export default function Navbar() {
    return (
        <nav className="bg-sky-600 fixed w-screen z-20 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#hero" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <picture>
                        <source srcSet="/logo-sm.png" media="(max-width: 768px)"/>
                        <source srcSet="/logo.png" />
                        <img src="/logo.png" className="h-10" alt="Flowbite Logo" />
                    </picture>
                    
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                        <a href="#projects" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Projects</a>
                        </li>
                        <li>
                        <a href="#about" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">About Me</a>
                        </li>
                        <li>
                        <a href="#contact" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}