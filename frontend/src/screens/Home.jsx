import Navbar from "../components/Navbar.jsx";
// import Header from "../components/Header.jsx";
import Butto from "../components/Butto.jsx";
import Banner from "../components/Banner.jsx";
import Main from "../components/Main.jsx";
// import Footer from "../components/Footer.jsx";
import Volume from "../components/Volume.jsx";


function Home() {
    return(
        <section className="font-poppins">
            <div className="max-w-6xl mx-auto">
                <Navbar/>
            </div>
            <div className='h-[1px] bg-gray-500'/>
            <div className="max-w-6xl mx-auto mt-4 mb-4 px-6">
                <h1 className='text-4xl font-bold headGrad'>Research Journal for Short Communication</h1>
            </div>
                <Banner/>
            <div className="max-w-6xl mx-auto mt-4 mb-4 px-6">
                <div className="flex flex-col gap-8 mt-8 mb-6 lg:flex-row md:flex-row">
                    {/*<Butto text="Editorial board"/>*/}
                    {/*<Butto text="Aims and scope"/>*/}
                    {/*<Butto text="Jornal updates"/>*/}
                </div>
                <h1 className="text-4xl font-bold headGrad">Overview</h1>
                <Main/>
                <Volume/>
            </div>



            {/*<div className="max-w-6xl mx-auto flex items-center justify-between">*/}
            {/*    <Header/>*/}
            {/*</div>*/}

            {/*<div className="max-w-6xl mx-auto">*/}
            {/*   */}
            {/*    /!*<Volume/>*!/*/}
            {/*</div>*/}
        </section>
    )
}
export default Home