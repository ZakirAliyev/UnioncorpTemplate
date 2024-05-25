import {Outlet} from "react-router-dom";
import Navbar from "../layouts/Navbar/index.jsx";
import TopNavbar from "../layouts/TopNavbar/index.jsx";

function MainRoot() {
    return (
        <>
            <TopNavbar/>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default MainRoot;