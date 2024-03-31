import PropTypes from "prop-types";
import {Link} from "react-router-dom";
EditorSection.propTypes = {
    EditorTitle:PropTypes.string.isRequired,
    EditorName: PropTypes.string.isRequired,
    Gmail: PropTypes.string.isRequired,
    Mobile:PropTypes.string.isRequired
}

function EditorSection({EditorTitle,EditorName,Gmail,Mobile}){
    const handleEmailClick = () => {
        window.location.href = `mailto:${Gmail}`;
    };
    return(
        <section>
            <div className="mt-4 mb-4">
                <h1 className="text-lg font-bold">{EditorTitle}</h1>
                <p>{EditorName}</p>
                <Link to={`mailto:${Gmail}`} onClick={handleEmailClick}>
                    {Gmail}
                </Link>
                <p>{Mobile}</p>
            </div>
            <hr/>
        </section>
    )
}

export default EditorSection