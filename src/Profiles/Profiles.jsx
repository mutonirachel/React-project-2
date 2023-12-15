import React from 'react'

function Profiles({image, email, name, text}) {
  return (
    <>
    <div>
      <div>
        <div>
            <img src={image} alt="Rachel Image" />
        </div>
        <div>
            <p>{name}</p>
            <span>{email}</span>
        </div>
      </div>
      <div>
        <button>{text}</button>
      </div>
    </div>
    </>
  )
}

export default Profiles
