import '../assets/Styles/Card.css'

function Card() {
    return (
       <div className="item">
            <div className="item-img">
                <img src="https://www.apose.fr/wp-content/uploads/2023/01/Apose_Or-rose-et-champagneV2.png" alt="" />
            </div>
            <div className="item-name">Rose gold & Champagne</div>
            <div className="item-price">$500</div>
       </div>
    )
}

export default Card