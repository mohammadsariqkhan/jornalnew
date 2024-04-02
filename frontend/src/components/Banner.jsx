import {Link, useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';
function Banner(){
    const auth = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    const navigation = useNavigate()
    return(
        <div
            className="background h-64 rounded-xl shadow-xl flex bg-white mt-3">
            {/*<div>*/}
            {/*    <img src="https://media.springernature.com/w158/springer-static/cover-hires/journal/43615?as=webp" alt=""/>*/}
            {/*</div>*/}
            <div className="hidden lg:block">
                <motion.div
                            initial={{ opacity: 0, x: -100 }} animate={{opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1 }}
                            className="border-2 border-black h-fit mt-7 ml-[-5rem] rounded-full bg-black">
                    <div className='ml-[30rem]'>
                    <img className='rounded-full w-48' src="/RJSC_20240402_145202_0000.png" alt="loading"/>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto p-6 flex gap-5 items-center">

                <div>
                    <button className="bg-black text-white font-semibold transition-all duration-300 ease-in-out px-8 py-4 rounded hover:rounded-2xl shadow-xl hover:scale-110 animate-pulse border border-gray-400 font-sans text-xl" onClick={() => {
                        if(auth && role === 'editor') {
                            navigation('/editor')
                        }else if(auth && role === 'author') {
                            navigation('/upload')
                        }else{
                            navigation('/login')
                        }
                    }}>Submit Your Script</button>
                </div>
            </div>

        </div>
    )
}
export default Banner