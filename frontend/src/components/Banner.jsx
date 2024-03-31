import {Link, useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';
function Banner(){
    const auth = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    const navigation = useNavigate()
    return(
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="background h-40 rounded-xl shadow-xl flex bg-white mt-3">
            <div className="max-w-6xl mx-auto p-6 flex gap-5 items-center">
            {/*<div>*/}
            {/*    <img src="https://media.springernature.com/w158/springer-static/cover-hires/journal/43615?as=webp" alt=""/>*/}
            {/*</div>*/}
                <div>
                    <button className="transition-all duration-300 ease-in-out bg-white px-3 py-2 rounded hover:rounded-2xl shadow-xl hover:scale-110 animate-pulse border border-gray-400" onClick={() => {
                        if(auth && role === 'editor') {
                            navigation('/editor')
                        }else if(auth && role === 'author') {
                            navigation('/upload')
                        }else{
                            navigation('/login')
                        }
                    }}>submit your script</button>
                </div>
            </div>

        </motion.div>
    )
}
export default Banner