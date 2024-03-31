import {Navigate, Outlet} from "react-router-dom";

function AuthComponent({children}){
    const auth = localStorage.getItem('token')

    return auth ? children : <Navigate to="/login"/>
}

export default AuthComponent