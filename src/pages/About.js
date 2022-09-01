import React from 'react'
import '../styles/aboutus.css'
const About = () => {
  return (
    <div className='aboutUs' >
      <div className="aboutus-g">
        <img src='./assets/G.png' alt="G_overlay" />
      </div>

      <div className="aboutus-content">
        <div className="aboutus-content_about">
          <h1 >About Us</h1>
          <img src='./assets/spoon.png' alt="about_spoon" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type="button">Know More</button>
        </div>

        <div className="aboutus-content_knife">
          <img src='./assets/knife.png' alt="about_knife" />
        </div>

        <div className="aboutus-content_history">
          <h1>Our History</h1>
          <img src='./assets/spoon.png' alt="about_spoon"/>
          <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button type="button">Know More</button>
        </div>
      </div>
    </div>
  )
}

export default About