import {useNavigate} from "react-router-dom";
import {FaUser} from "react-icons/fa6";

function Navbar(){
    const navigation = useNavigate()
    const auth = localStorage.getItem('token')
    const authName = localStorage.getItem('name')
    return(
        <>
            <div className="flex items-center justify-between px-8 py-4">
                <div className="cursor-pointer h-10 w-16 transition-all duration-300 ease-in-out hover:scale-105 bg-white hover:bg-gray-100 text-gray-800 rounded shadow-lg" onClick={() => {
                    navigation('/')
                }}>
                    <img className="object-cover" src="/rjsc.svg" alt="loading..."/>
                </div>

                <div className="flex gap-3 text">
                    {auth ?  (
                        <div className="flex items-center gap-3">
                            <div className='flex flex-col items-center cursor-pointer hover:text-black text-gray-500 transition-all duration-100 ease-out' onClick={() => {
                                navigation('/profile')
                            }}>
                                <FaUser/>
                                <span>{authName}</span>
                            </div>
                            <button className="btn transition-all duration-300 ease-in-out hover:scale-105 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" onClick={() =>{
                                localStorage.clear()
                                navigation('/')
                            }}>Log out</button>
                        </div>
                    ): <button className="btn transition-all duration-300 ease-in-out hover:scale-105 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg" onClick={() =>{
                        navigation('/login')
                    }}>Log in/Register</button>}

                </div>
            </div>
        </>
    )
}
export default Navbar