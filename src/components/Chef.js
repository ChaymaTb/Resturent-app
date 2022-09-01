import React from 'react'
import '../styles/chef.css'
const Chef = () => {
    return (
        <div className='chef'>

            <div className="chef-image">
                <img src='./assets/chef.png' alt="chef_img" />
            </div>
            <div className="info">
                <h2>Chef's word</h2>
                <img src="./assets/spoon.png" alt="" />
                <h5>What we believe in</h5>

                <div className="chef-content">
                    <div className="chef-content_quote">
                        <img src='./assets/quote.png' alt="quote_img" />
                        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                    </div>
                    <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                </div>

                <div className="chef-sign">
                    <p className='chef_name'>Kevin Luo</p>
                    <p className="p__opensans">Chef & Founder</p>
                    <img src='./assets/sign.png' alt="sign_img" />
                </div>
            </div>
        </div>
    )
}

export default Chef