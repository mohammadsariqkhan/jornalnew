import {Link} from "react-router-dom";
import {LuShoppingCart} from "react-icons/lu";

function Header(){
    return(
        <>
            <div className="flex gap-6 mt-4">
                <div className="flex gap-4">
                    <Link to="" className="cursor-pointer transition delay-100 ease-in hover:border-b-emerald-900 border-b-2 border-white">Find a jornal</Link>
                    <Link to="" className="cursor-pointer transition delay-100 ease-in hover:border-b-emerald-900 border-b-2 border-white">Publish with us</Link>
                    <Link to="" className="cursor-pointer transition delay-100 ease-in hover:border-b-emerald-900 border-b-2 border-white">Track your research</Link>
                </div>
                <div>
                    search
                </div>
            </div>
            <div className="flex items-center gap-2 text-xl cursor-pointer transition delay-100 ease-in hover:border-b-emerald-900 border-b-2 border-white">
                <LuShoppingCart/>
                cart
            </div>
        </>
    )
}

export default Header