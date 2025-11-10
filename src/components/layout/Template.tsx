import {useState} from "react";
import {NavLink} from "react-router";

type TTemplate = {
    children: any
};

function Template({children}: TTemplate) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-[#09090B]/50 backdrop-blur-[5px] w-full sticky top-0 shadow-md px-4 md:px-0">
                <div className="app-container">
                    <div className="flex justify-between h-16">
                        <NavLink
                            to="/"
                            className="flex items-center gap-2 text-2xl text-white/90 hover:text-white transition-color"
                        >
                            <img
                                src="/logo.png"
                                alt="Logo"
                                style={{height: 44}}
                            />
                            Bejibun
                        </NavLink>

                        <div className="hidden md:flex space-x-8 items-center">
                            <NavLink to="#" className="text-white/90 hover:text-white transition-color">Docs</NavLink>
                            <NavLink to="#" className="text-white/90 hover:text-white transition-color">Blog</NavLink>
                            <NavLink
                                to="/community"
                                className="text-white/90 hover:text-white transition-color"
                            >
                                Community
                            </NavLink>
                            <NavLink
                                to={import.meta.env.VITE_GITHUB_URL}
                                className="text-white/90 hover:text-white transition-color"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="bi bi-github"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                    />
                                </svg>
                            </NavLink>
                        </div>

                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 focus:outline-none"
                            >
                                {isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden shadow-inner animate-slide-down">
                        <NavLink
                            to="#"
                            className="block px-4 py-2 text-white/90 hover:text-white transition-color"
                        >
                            Docs
                        </NavLink>
                        <NavLink
                            to="#"
                            className="block px-4 py-2 text-white/90 hover:text-white transition-color"
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/community"
                            className="block px-4 py-2 text-white/90 hover:text-white transition-color"
                        >
                            Community
                        </NavLink>
                        <NavLink
                            to={import.meta.env.VITE_GITHUB_URL}
                            className="block px-4 py-2 text-white/90 hover:text-white transition-color"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                fill="currentColor"
                                className="bi bi-github"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                />
                            </svg>
                        </NavLink>
                    </div>
                )}
            </nav>

            <div className="app-container py-10">
                {children}
            </div>
        </div>
    );
}

export default Template;