import React from 'react'
import '../styles/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-links">
        <div className="footer-links_contact">
          <h1>Contact Us</h1>
          <p className="p_opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p_opensans">+1 212-344-1230</p>
          <p className="p_opensans">+1 212-555-1230</p>
        </div>

        <div className="footer-logo">
          <img src='../assets/pngegg.png' alt="footer_logo" id='logo'/>
          <div >
            <p className="p_opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
            <img src='../assets/spoon.png' alt='spoon_img' className="spoon_img" />
          </div>
          <div className="footer-icons">
            <img src="../assets/fcb_icon.png" alt="facebook_icon" className='icons'/>
            <img src="../assets/twitter.png" alt="facebook_icon" className='icons'/>
            <img src="../assets/insta_icon.png" alt="facebook_icon" className='icons'/>
          </div>
        </div>

        <div className="footer-links_work">
          <h1>Working Hours</h1>
          <p className="p_opensans">Monday-Friday:</p>
          <p className="p_opensans">08:00 am - 12:00 am</p>
          <p className="p_opensans">Saturday-Sunday:</p>
          <p className="p_opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer_copyright">
        <p className="p_opensans">2021 Our restaurant, All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer