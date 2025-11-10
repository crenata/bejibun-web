import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Community from "./pages/Community";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/community" element={<Community/>}/>
        </Routes>
    )
}

export default AppRoutes;
