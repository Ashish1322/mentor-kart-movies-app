import React from 'react'

export default function MovieCard({image,title}) {
  return (
    <div className='movieCard'>
        <img className='movieCardImage'  src={image}/>
        <h3 className='movieCardHeading'>{title}</h3>
    </div>
  )
}
