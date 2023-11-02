import '../assets/Styles/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div className="nav">
            <div className="logo">Pluto</div>
            <div className="features">
                <div className="menu">Menu</div>
                <div className="profile">
                <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="country">
                    
                </div>
            </div>
        </div>
    )
}

export default Nav