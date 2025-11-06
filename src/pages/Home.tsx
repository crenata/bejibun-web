import {useState} from "react";
import {NavLink} from "react-router";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("linux");

    const tabs = [
        {id: "linux", label: "Linux / Mac OS", content: "curl -fsSL https://bun.sh/install | bash"},
        {id: "windows", label: "Windows", content: `powershell -c "irm bun.sh/install.ps1 | iex"`}
    ];

    const commandsScaffolding = [
        {id: "make:command", command: "make:command", description: "Create a new command file"},
        {id: "make:controller", command: "make:controller", description: "Create a new controller file"},
        {id: "make:middleware", command: "make:middleware", description: "Create a new middleware file"},
        {id: "make:migration", command: "make:migration", description: "Create a new migration file"},
        {id: "make:model", command: "make:model", description: "Create a new model file"},
        {id: "make:seeder", command: "make:seeder", description: "Create a new seeder file"},
        {id: "make:validator", command: "make:validator", description: "Create a new validator file"}
    ];

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
                            <NavLink to="#"
                                     className="text-white/90 hover:text-white transition-color">Community</NavLink>
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
                            to="#"
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
                <div className="">
                    <div className="flex justify-center">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-54 lg:w-72 rounded-full shadow-lg shadow-cyan-500/50"
                        />
                    </div>
                    <div className="text-center mt-10">
                        <h1 className="text-3xl">A typescript framework using Bun runtime</h1>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-2">
                            <h1 className="text-xs break-all">CA : {import.meta.env.VITE_CONTRACT_ADDRESS}</h1>
                            <button className="cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    className="bi bi-copy"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <NavLink
                            to={`https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=${import.meta.env.VITE_CONTRACT_ADDRESS}`}
                            target="_blank"
                            className="bg-violet-200 text-black/75 rounded-xl px-4 py-2"
                        >
                            Buy $BJBN
                        </NavLink>
                        <button className="bg-slate-600 rounded-xl cursor-pointer px-4 py-2">Get Started</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
                    <div className="border border-[#2E2B3F] bg-[#0F0F1A] rounded-xl p-5">
                        <h1 className="text-3xl flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-lightning-charge-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                                />
                            </svg>
                            Installation
                        </h1>
                        <p className="mt-4">
                            If you don't have&nbsp;
                            <NavLink
                                to="https://bun.com"
                                target="_blank"
                                className="text-white/90 hover:text-white transition-color underline"
                            >
                                Bun
                            </NavLink>
                            &nbsp;installed :
                        </p>

                        <div className="flex mt-6">
                            <div className="">
                                <div className="flex items-center border-b border-slate-600">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`px-4 py-2 text-xs sm:text-base font-semibold cursor-pointer ${activeTab === tab.id ? "border-b-2 border-slate-600" : "text-slate-600 hover:text-cyan-600 transition-color"}`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="bg-code rounded-b-xl p-4">
                                    {tabs.map((tab: Record<string, any>) => activeTab === tab.id && (
                                            <div className="flex items-center gap-8" key={tab.id}>
                                                <p className="text-xs sm:text-base">{tab.content}</p>
                                                <button className="cursor-pointer">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-copy"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-[#2E2B3F] bg-[#0F0F1A] rounded-xl p-5">
                        <h1 className="text-3xl flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-lightning-charge-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                                />
                            </svg>
                            Setup
                        </h1>
                        <p className="mt-4">
                            To setup the project. Just run :
                        </p>

                        <div className="flex mt-6">
                            <div className="bg-code rounded-xl p-4">
                                <div className="flex items-center gap-8">
                                    <p className="text-xs sm:text-base">bunx @bejibun/cli your-project</p>
                                    <button className="cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-copy"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="text-3xl flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-lightning-charge-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                            />
                        </svg>
                        Ace Commands
                    </h1>
                    <p className="mt-4">
                        To see list of available commands, run :
                    </p>

                    <div className="flex mt-6">
                        <div className="bg-code rounded-xl p-4">
                            <div className="flex items-start gap-8">
                                <div className="">
                                    <p className="text-xs sm:text-base">bun ace</p>
                                    <p className="text-xs sm:text-base">bun ace help</p>
                                    <p className="text-xs sm:text-base">bun ace --h</p>
                                    <p className="text-xs sm:text-base">bun ace --help</p>
                                </div>
                                <button className="cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-copy"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="text-3xl flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-lightning-charge-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                            />
                        </svg>
                        Available Commands
                    </h1>
                    <p className="text-xl flex items-center gap-2 mt-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-tag-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                            />
                        </svg>
                        Scaffolding
                    </p>

                    <ul className="pl-6 mt-2">
                        {commandsScaffolding.map(value => (
                            <li key={value.id}>
                                <div className="flex items-center gap-4 py-1">
                                    <div className="bg-code rounded-lg px-3 py-2">
                                        <p className="text-xs sm:text-sm text-gray-400">{value.command}</p>
                                    </div>
                                    <p className="text-xs sm:text-base">{value.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;