import React, { useState } from 'react'
import { addOpinion, removeOpinion } from '../JS/opinionSlice'
import '../styles/opinion.css'
import { useSelector, useDispatch } from 'react-redux'

const Opinion = () => {
  const [opinion, setOpinion] = useState('')
  const [fullName, setFullName] = useState("no name");
  const opinions = useSelector((state) => state.opinions)

  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)

  return (
    <div className='opinion' style={{position:"relative",overflow:'hidden'}} >
      <div className='opinion_title'>
        <h3>Thank you for giving your opinion </h3>
        <img src="../assets/spoon.png" alt="spoon_img" />
        <h2>Write a good one XP</h2>
        <div className='add_opinion'>
        <input className='input-add' type="text" placeholder='Full Name' onChange={(e) => setFullName(e.target.value)} />

          <input className='input-add' type="text" placeholder='Comment' onChange={(e) => setOpinion(e.target.value)} />
          <button className='icon-btn add-btn' onClick={() => dispatch(addOpinion({
            id: opinions.length,
            fullName: fullName,
            description: opinion
          }))}>
          <div class="add-icon"></div>
          <div class="btn-txt">Add</div>
          </button>
          <div className='opinion_text'>
            {opinions.map(op => <div className='opinion_fullName_descr'
            style={{position:'absolute',top:op.positionY,left:op.positionX}}>
                <img src='https://www.shareicon.net/data/2016/05/24/770139_man_512x512.png' alt=''/>
                <h3>{op.fullName}</h3>
                <h5>{op.description}</h5>
              <button className="btn rmv-btn"
                onClick={() => dispatch(removeOpinion(op))}>X</button>
            </div>
            )}
          </div>

aa
        </div>
      </div>
      <div className='opinion_imgs'>
        <img className='opinion_imgs_overlaybg' src="../assets/a.png" alt="overlaybg" />
      </div>
    </div>
  )
}

export default Opinion