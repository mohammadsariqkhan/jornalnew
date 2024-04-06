import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import toast from "react-hot-toast";
import Loader from "../components/Loader.jsx";

function Upload() {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  //   const [files, setFiles] = useState([]);

  const handleUpload = async (e) => {
    
    try {
      setLoading(true);
      e.preventDefault();
      const formData = new FormData()
      formData.append("pdfFile", file);
      formData.append('title',title)
      if (file) {
        const response = await axios.post(
          "http://localhost:8000/upload",
              formData,
          {
            headers: {
              'email': `${localStorage.getItem("email")}`,
              'authorization':`Bearer ${localStorage.getItem('token')}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.message);
        setTitle('')

      } else {
        toast("Please Select the File");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg  ">
            <h2 className="mb-4 text-2xl font-bold m-4 ">
              Upload PDF File
            </h2>
            <label className="">Title</label>
            <input
                className="ml-2 mb-1 shadow-xl border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:border-blue-500"
                type="text" required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                placeholder="Enter title in 50 words"
            />
            <label className="block mb-4 mt-2">
              <span className="">Choose a PDF file:</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <button
              onClick={handleUpload}
              className="w-full px-4 py-2 text-base font-semibold text-white btn hover:scale-105 transition-all duration-200 ease-in 
               rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50
               bg-gradient-to-r from-sky-500 to-blue-500"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Upload;
