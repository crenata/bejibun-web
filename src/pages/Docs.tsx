import Template from "../components/layout/Template";

function Docs() {
    return (
        <Template>
            <h1 className="text-3xl font-semibold text-center">{import.meta.env.VITE_APP_NAME} Docs</h1>
            <div className="mt-14" style={{height: "75vh"}}>
                <iframe
                    src="https://bejibun.notion.site/ebd//2cedf0c3462180649a72ffbac21f27e5"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </Template>
    );
}

export default Docs;