import Navbar from "../components/Navbar.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader.jsx";
import {Link, useHref} from "react-router-dom";

function Editor(){
   const [data,setData] = useState([]);
   const [loading,setLoading] = useState(false)

    useEffect(()=>{
        const getData = async () => {
            try{
                setLoading(true)
                const response = await axios.get('http://localhost:8000/api/v1/users/editor')
                const res = response.data
                setData(res)
            } catch (err){
                toast.error(err.message)
            } finally {
                setLoading(false)
            }
        }
        getData()
    },[])
    return(
        <>
            <Navbar/>
            {loading && <Loader/>}
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">URLs</th>
                    </tr>
                    </thead>
                    <tbody>

                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="border-4 px-4 py-2">{item.username}</td>
                            <td className="border-4 px-4 py-2">{item.email}</td>
                            <td className="border-4 px-4 py-2">
                                <ol className="list-decimal px-8">
                                    {item?.file_url.map((url, urlIndex) => (
                                        <li key={urlIndex}><a href={url} className="text-blue-800">{url}</a> </li>
                                    ))}
                                </ol>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Editor