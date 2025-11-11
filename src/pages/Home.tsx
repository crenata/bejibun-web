import {useState} from "react";
import {NavLink} from "react-router";
import Copy from "../components/Copy";
import Template from "../components/layout/Template";
import Card from "../components/Card";

function Home() {
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
        <Template>
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
                        <Copy text={import.meta.env.VITE_CONTRACT_ADDRESS} />
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
                <Card>
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
                                            <Copy text={tab.content} />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </Card>

                <Card>
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
                                <Copy text="bunx @bejibun/cli your-project" />
                            </div>
                        </div>
                    </div>
                </Card>
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
                            <Copy text="bun ace" />
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
        </Template>
    );
}

export default Home;