import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader.jsx";

const Register = () => {
    const navigation = useNavigate()
    const [loading, setLoading] = useState(false);
    const [user,setUser] = useState({
        username:'',
        email:'',
        password:'',
        role:''
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
            const response = await axios.post('http://localhost:8000/api/v1/users/register', user);
            localStorage.setItem('name',response.data.user.username)
            localStorage.setItem('email',response.data.user.email)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('role',response.data.user.role)
            toast.success('Register successfully')
            if(response.data.user.role === 'author')
            {
                navigation('/upload')
            }else{
                navigation('/editor')
            }

        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    };
    return (
        <>
            <section>
                {loading ? (<Loader/>) : (<div
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
                                className="text-xl text-center font-bold
                             leading-tight tracking-tight
                           text-gray-900 md:text-2xl dark:text-white"
                            >
                                Create  account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium
                             text-gray-900 dark:text-white"
                                    >
                                        username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300
                              text-gray-900 sm:text-sm rounded-lg
                                focus:ring-primary-600 focus:border-primary-600
                                block w-full p-2.5 dark:bg-gray-700
                             dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500
                              dark:focus:border-blue-500"
                                        placeholder="username"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium
                             text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300
                               text-gray-900 sm:text-sm rounded-lg
                                 focus:ring-primary-600 focus:border-primary-600
                                 block w-full p-2.5 dark:bg-gray-700
                              dark:border-gray-600 dark:placeholder-gray-400
                              dark:text-white dark:focus:ring-blue-500
                              dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium
                             text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border
                               border-gray-300 text-gray-900
                               sm:text-sm rounded-lg focus:ring-primary-600
                               focus:border-primary-600 block w-full p-2.5
                              dark:bg-gray-700 dark:border-gray-600
                              dark:placeholder-gray-400 dark:text-white
                              dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button
                                        name='author'
                                        className="bg-gradient-to-r from-violet-400 to-purple-300 rounded-full ml-2 mr-2 py-4 px-6"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setUser({
                                                ...user,
                                                role: 'author'
                                            })
                                        }
                                    }
                                    >
                                        Author Login
                                    </button>
                                    <button
                                        name='editor'
                                        className="bg-gradient-to-r from-violet-400 to-purple-300 rounded-full ml-2 mr-2 py-4 px-6"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setUser({
                                                ...user,
                                                role: 'editor'
                                            })
                                        }}
                                    >
                                        Editor Login
                                    </button>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700
                            focus:ring-4 focus:outline-none focus:ring-primary-300
                            rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500 font-bold btn
                           "
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        <span className="text-white">Login here</span>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>)}
            </section>
        </>
    );
};

export default Register;
