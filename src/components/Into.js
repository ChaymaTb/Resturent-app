import React from 'react'

const Into = () => {
    return (
        <div id='intro'>
            <video
                style={{width:'100%', height:'600px', backgroundColor:`black`}}
                src='./assets/meal.mp4'
                type="video/mp4"
                controls={false}
                autoPlay
            />
        </div>
    )
}

export default Into