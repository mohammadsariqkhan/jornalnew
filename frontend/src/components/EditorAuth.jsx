import {Navigate, Outlet} from "react-router-dom";


function EditorAuth({children}){
    const auth = localStorage.getItem('role')

    return auth === 'editor' ? children : <Navigate to="/upload"/>
}
export default EditorAuth