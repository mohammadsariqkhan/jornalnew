import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
function Volume(){
    const [data,setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/volume')
                const res = response.data
                setData(res.user)
            } catch (err){
                toast.error(err.message)
            }
        }

        getData()
        console.log(data)
    },[])
    return(
        <section className="mt-6 cursor-pointer">
            <h1 className="text-4xl font-bold headGrad">Volumes</h1>
            {data.map((item,idx)=>(
                <div key={idx}>
                    {item.role === 'author' && <motion.div  initial={{ opacity: 0, x: -100 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 2 }} key={idx} className="h-52 rounded-xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 background ease-in-out mt-6 bg-white">
                        <h1 className="lg:text-2xl font-bold">Title: {item.file_urlAndTitle[item.file_urlAndTitle.length-1].title}</h1>
                        <p className="text-blue-800 cursor-pointer" onClick={()=>{
                            navigate('/payment')
                        }}>{
                            item.file_urlAndTitle[item.file_urlAndTitle.length-1].urls}</p>
                        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:text-lg'>
                            <p className="lg:font-semibold">Name: {item.username}</p>
                            <p className="lg:font-semibold">email: {item.email}</p>
                        </div>
                    </motion.div>}
                </div>
            ))}
        </section>
    )
}
export default Volume