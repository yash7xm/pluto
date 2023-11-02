import Card from "./Card"
import '../assets/Styles/Cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


function Cards() {
    return (
        <div className="cards">
            <div className="prev-btn btns">
                <FontAwesomeIcon icon={faArrowLeftLong} className="move-prev-btn"/>
            </div>
            <div className="items">
                <Card />
            </div>
            <div className="next-btn btns">
                <FontAwesomeIcon icon={faArrowRightLong} className="move-next-btn"/>
            </div>
        </div>
    )
}

export default Cards