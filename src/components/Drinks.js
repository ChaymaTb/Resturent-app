import React from 'react'
import { useSelector } from 'react-redux'

const Drinks = () => {
    const drinks = useSelector((state) => state.drinks)
    return (
        <div className='drinks'>
            <div className="specialMenu-title">
                <h4>Menu that fits your palatte</h4>
                <div className='spoon_menu_img'>
                    <img src="./assets/spoon.png" alt="spoon_img" />
                </div>
                <h5>Today's Special</h5>
            </div>

            <div className="specialMenu-menu">
                <div className="specialMenu-menu_juice">
                    <p className="specialMenu-menu_heading">Juice</p>
                    <div className="specialMenu_menu_items">
                        {drinks.slice(0, 6).map((juice, i) =>
                            <div key={i} className='juice_price'>
                                <p>{juice.title}</p>
                                <h6>{juice.price}</h6>
                            </div>
                        )}
                    </div>

                </div>

                <div className="specialMenu-menu_img">
                    <img src='./assets/menu.png' alt="menu_img" />
                </div>

                <div className="specialMenu-menu_softdrinks">
                    <p className="specialMenu-menu_heading">Soft drinks</p>
                    <div className="specialMenu_menu_items">
                        {drinks.slice(6, 15).map((softdrink, i) =>
                            <div key={i} className='juice_price'>
                                <p>{softdrink.title}</p>
                                <h6>{softdrink.price}</h6>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drinks
