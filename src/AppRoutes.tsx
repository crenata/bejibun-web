import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Docs from "./pages/Docs";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/docs" element={<Docs/>}/>
        </Routes>
    )
}

export default AppRoutes;
