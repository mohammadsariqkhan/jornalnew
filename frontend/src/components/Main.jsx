import EditorSection from "./EditorSection.jsx";
import {motion} from "framer-motion";

function Main(){
    return(
        <motion.div  initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} className="p-4 rounded-md mt-2 drop-shadow-lg shadow-xl bg-white tracking-wide">
            <p>This journal is a peer-reviewed publications focusing on high-quality short communication research articles with a hybrid mode of publications. We consider all engineering, science, and other multidisciplinary short research articles, as well as short review articles (limited to 1500 words). The article review policy is double-blind peer-reviewed (with at least 2 potential reviewers), with remuneration based on improving the quality of publications. With the review remuneration start-up policy, reviewers will take more interest in reviewing articles to improve the quality of publications. The journal also welcomes special issues for national and international conference proceedings.</p>
            <hr className="border-gray-400 mt-3"/>
            <h1 className='mt-3 font-bold text-lg
            '>Editorial board</h1>
            <hr className="border-gray-400"/>
            <EditorSection EditorTitle='Editor in Cheif' EditorName='Prof.(Dr).Krishan Kumar Patel' Gmail='krishanpatel4@gmail.com' Mobile='Mob:- +919907851754, +918770468630' />
            <hr className="border-gray-400"/>
            <EditorSection EditorTitle='Editors' EditorName='Cheif Scientist Dr.Santosh Yadav, Philadelphia, Pennsylvania, United States' Gmail="santoshkonkuk@gmail.com" />
            <EditorSection EditorName='Prof.(Dr.)Sudhanshu Mallick, IIT Bombay, India' Gmail='mallick@iitb.ac.in'/>
            <hr className="border-gray-400"/>
            <EditorSection EditorName='Prof.(Dr.)Parag Bhargav, IIT Bombay, India'/>
            <hr className="border-gray-400"/>
            <EditorSection EditorName='Prof.(Dr.)Rajesh Purohit, MANIT Bhopal, India'/>
            <hr className="border-gray-400"/>
            <EditorSection EditorName='Prof.(Dr).Ajay kumar Patel, Saint Louis University, USA'/>
            <hr className="border-gray-400"/>
            <EditorSection EditorName='Prof.(Dr)Neeraj Dwivedi, CSIR-AMPRI Bhopal, India'/>
            <hr className="border-gray-400"/>
            <EditorSection EditorName='Many more...'/>
                <hr className="border-gray-400"/>
                <EditorSection EditorTitle='Backend support' EditorName='Mohammad Sariq Khan' Gmail='mohsariqkhan2004@gmail.com' Mobile='Mob:- +917987888025'/>
            <hr className="border-gray-400"/>
            <EditorSection EditorName='Abhishek Lodha' Gmail='abhisheklodha512@gmail.com' Mobile='Mob:- +919301867465'/>
            <hr className="border-gray-400"/>
            <EditorSection EditorTitle='Neeraj Hariyale' EditorName='Mohammad Sariq Khan' Gmail='hariyaleneeraj31@gmail.com' Mobile='Mob:- +917999873846'/>
        </motion.div>
    )
}
export default Main