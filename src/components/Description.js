import React from 'react'
import '../styles/description.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Description = () => {
    const { id } = useParams()
    const plates = useSelector((state) => state.plates)
    return (
        <div className='plate_description'>
            {plates.filter(plate => plate.id == parseInt(id)).map((plate, i) =>
                <div key={i} className='descr'>
                    <div className='descr_img'>
                        <img src={`.${plate.url}`} alt="plate" />
                        <h3>{plate.name}</h3>
                    </div>
                    <div className='descr_p'>
                        <p>{plate.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Description