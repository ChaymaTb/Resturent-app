import React from 'react'
import '../styles/findUs.css'

const FindUs = () => {
    return (
        <div className='find_us'>

            <div className="findus_info">
                <p className='findus_title'>Wherever you turn, you find us</p>
                <img src="./assets/spoon.png" alt="spoon_img" />
                <h2>Find Us</h2>
                <div className="findus-content">
                    <p className="opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
                    <p className="cormorant">Opening Hours</p>
                    <p className="opensans">Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className="opensans">Sat - Sun: 10:00 am - 03:00 am</p>
                </div>
                <button type="button" className="custom__button">Visit Us</button>
            </div>

            <div className="findus_img">
                <img src='../assets/findus.png' alt="finus_img" />
            </div>
        </div>
    )
}

export default FindUs