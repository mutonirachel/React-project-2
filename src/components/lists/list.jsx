import React from 'react'
import './List.css'

function List({image, name, email, position, time}) {
  return (
    <>
      <div className='container'>
        <div className='image-name-email'>
            <div className='image'>
                <img src={image} alt="Leslie Alexander Image" />
            </div>
            <div className='name-email'>
                <p className='name'>{name}</p>
                <span className='email'>{email}</span>
            </div>
        </div>
        <div className='position-time'>
            <p className='position'>{position}</p>
            <span className='time'>{time}</span>
        </div>
    </div>
    </>
  )
}

export default List
