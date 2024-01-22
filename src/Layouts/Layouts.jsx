import { Outlet } from "react-router-dom";
import Navber from "../utils/Navber";

const Layouts = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Layouts;