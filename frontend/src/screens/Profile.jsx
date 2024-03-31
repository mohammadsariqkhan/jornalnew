import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import {Link} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Profile(){
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await axios.get('http://localhost:8000/profile',{
                headers:{
                    'email':localStorage.getItem('email')
                }
            })
            const res = response.data.user.file_urlAndTitle
            await setData(res)
        }
        fetchData()
        console.log(data)
    },[])
    const handleDelete = async () => {
        const response = await axios.delete('http://localhost:8000/profile',{
            headers:{
                'email':localStorage.getItem('email')
            }
        })
    }
    return(
        <section>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-3">
                {data.map((item, index) => (
                    <div key={index} className="border border-gray-200 p-4 rounded-md shadow-md flex items-center">
                        <div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <Link to={item.urls} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{item.urls}</Link>
                        </div>
                        {/*<div>*/}
                        {/*    <DeleteIcon className="active:text-gray-500 transition-all duration-100 ease-in-out" onClick={handleDelete}/>*/}
                        {/*</div>*/}
                    </div>
                ))}
            </div>
        </section>
    )
}