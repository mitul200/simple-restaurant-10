import { useContext } from "react";
import { AuthContext } from "../PrivetRouter/PrivetRouter";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Wall = ({children}) => {
    const location = useLocation()
    const {user,loding} = useContext(AuthContext)
    if(loding){
        return <span className="loading text-center loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"  state={{ from: location }} replace ></Navigate>
};

export default Wall;