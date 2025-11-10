import {useEffect, useState} from "react";
import toast from "react-hot-toast";

type TCopy = {
    text: string
};

function Copy({text}: TCopy) {
    const [isCopy, setIsCopy] = useState(false);

    const unSecuredCopyToClipboard = () => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand("copy");
            toast.success("Copied.");
        } catch (err) {
            toast.error("Unable to copy to clipboard.");
        }
        document.body.removeChild(textArea);
    }

    const copyToClipboard = () => {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(text);
            toast.success("Copied.");
        } else {
            unSecuredCopyToClipboard();
        }

        setTimeout(() => {
            setIsCopy(false);
        }, 500);
    };

    useEffect(() => {
        if (isCopy) copyToClipboard();
    }, [isCopy]);

    return (
        <button className="cursor-pointer" onClick={() => setIsCopy(true)}>
            {isCopy ?
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    />
                </svg> :
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
            }
        </button>
    );
}

export default Copy;