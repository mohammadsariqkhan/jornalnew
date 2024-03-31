
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader.jsx";


const Login = () => {
    const navigation = useNavigate()
    const [loading, setLoading] = useState(false);
    const [user,setUser] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await axios.post('http://localhost:8000/api/v1/users/login', user,{
                headers: {
                    'authorization':`Bearer ${localStorage.getItem('token')}`,
                }
            })
            localStorage.setItem('name',response.data.user.username)
            localStorage.setItem('email',response.data.user.email)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('role',response.data.user.role)
            if(response.data.user.role === 'author'){
                navigation('/upload')
            }else{
                navigation('/editor')
            }
        } catch (err) {
            toast.error('enter valid email and password')
        } finally {
            setLoading(false)
        }
    };
    return (
        <section>
            {loading ? (<Loader/>) : ( <div
                className="flex flex-col items-center
                      justify-center px-6 py-8
                      mx-auto md:h-screen lg:py-0 drop-shadow-2xl"
            >
                <div
                    className="w-full bg-white rounded-lg
                     shadow dark:border md:mt-0
                     sm:max-w-md xl:p-0
                     dark:bg-gray-800
                     dark:border-gray-700 drop-shadow-2xl"
                >

                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 drop-shadow-2xl">
                        <h1
                            className="text-xl font-bold leading-tight
                           text-center tracking-tight
                         text-gray-900 md:text-2xl dark:text-white"
                        >
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300
                             text-gray-900 sm:text-sm rounded-lg
                               focus:ring-primary-600 focus:border-primary-600
                               block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300
                             text-gray-900 sm:text-sm rounded-lg
                               focus:ring-primary-600 focus:border-primary-600
                               block w-full p-2.5 dark:bg-gray-700
                             dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700
                        focus:ring-4 focus:outline-none focus:ring-primary-300
                        rounded-lg text-sm px-5 py-2.5 text-center btn font-bold
                       "
                            >
                                Login
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    <span className="text-white">Register here</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>)}

        </section>
    );
};

export default Login;
