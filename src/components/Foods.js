import React, { useState } from 'react'
import '../styles/foods.css'
import { useSelector, useDispatch } from 'react-redux'
import { searchFood } from '../JS/foodSlice'
import { Link } from 'react-router-dom'

const Foods = () => {
    const plates = useSelector((state) => state.plates)
    const dispatch= useDispatch();
    const [search, setSearch] = useState('')

    return (
        <div className='foods'>

            <div className='search'>
                <input type="search" placeholder='search for your plate' onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div className='food_plates'>
                    {/* salad */}
                <div className='plate_type_salad'>
                    <h2>Salad</h2>
                    {plates.slice(0, 5).filter(el=>el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((plate, i) =>
                        <Link to={`/description/${plate.id}`}>
                            <div key={i} className='plate_card'>
                                <img src={plate.url} alt="plate_img" className='plate' />
                                <div className='title'>
                                    <h3>{plate.name}</h3>
                                    <p>{plate.price}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
                    {/* pasta */}
                <div className='plate_type_pasta'>
                    <h2>Spaghetti</h2>
                    {plates.slice(5,11).filter(el=>el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((plate, i) => 
                        <Link to={`/description/${plate.id}`}>
                            <div key={i} className='plate_card'>
                                <img src={plate.url} alt="plate_img" className='plate' />
                                <div className='title'>
                                    <h3>{plate.name}</h3>
                                    <p>{plate.price}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Foods