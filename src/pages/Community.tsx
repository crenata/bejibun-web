import Template from "../components/layout/Template";
import {NavLink} from "react-router";

function Community() {
    const communities = [
        {
            id: "telegram",
            name: "Telegram",
            url: "https://t.me/BejibunPortal",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi expedita possimus repudiandae vero.",
            svgPath: <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
        },
        {
            id: "twitter",
            name: "X",
            url: "https://x.com/bjbnframework",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi expedita possimus repudiandae vero.",
            svgPath: <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        },
        {
            id: "twitter-community",
            name: "X Community",
            url: "https://x.com/i/communities/1985094853068271746",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi expedita possimus repudiandae vero.",
            svgPath: <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        }
    ];

    return (
        <Template>
            <h1 className="text-3xl font-semibold text-center">Bejibun Community</h1>
            <div className="grid grid-cols-6 mt-14">
                <div className="col-span-6 lg:col-span-4 lg:col-start-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {communities.map(value => (
                            <NavLink
                                to={value.url}
                                target="_blank"
                                className="md:flex items-center border border-[#2E2B3F] bg-[#0F0F1A] rounded-xl p-8 gap-8"
                                key={value.id}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-1/4"
                                    viewBox="0 0 16 16"
                                >
                                    {value.svgPath}
                                </svg>
                                <div className="lg:w-3/4 mt-5 md:mt-0">
                                    <h1 className="text-3xl">{value.name}</h1>
                                    <p className="mt-4">{value.description}</p>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </Template>
    );
}

export default Community;