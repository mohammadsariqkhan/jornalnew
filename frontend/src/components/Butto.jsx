import PropTypes from "prop-types";
Butto.propTypes = {
    text: PropTypes.string.isRequired
}
function Butto({text}){

    return(
            <button className="px-6 py-2 rounded-full text-cyan-700 bg-blue-50 drop-shadow-md shadow-inner hover:scale-110 transition duration-300 ease-in-out">
                <p className="border-b-2 border-b-cyan-600 hover:border-b-cyan-900 text-sm">{text}</p>
            </button>
    )
}

export default Butto