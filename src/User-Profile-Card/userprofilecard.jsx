import React from 'react'
import "./userprofilecard.css"
import imag from "../Asset/man.jpg"

const UserProfileCard = ({
  grafix,
  des,
  me,

}) => {
  return (
    <div className="test">
    <div className='upc'>
        <div className="gradient"></div>
        <div className="profile">
        <img src={imag} alt="" className='imaa'/>
        <div className="profile-title">{grafix}</div>
        <div className="profile-description">
        {des}
        </div>
        <div className="profile-btn"><a href="mailto:grafixoceans@gmail.com">{me}</a>
        </div>
        </div>
    </div>
    </div>
  )
}

export default UserProfileCard