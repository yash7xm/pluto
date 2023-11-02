import '../assets/Styles/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="text">Newspaper</div>
            <div className="text-btn">
                <FontAwesomeIcon icon={faCity} />
            </div>
        </div>
    )
}

export default Sidebar