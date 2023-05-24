import React, { useState } from 'react'

export default function Navbar({fetchMovies,fetchWebSeries}) {

    const [movieName,setMovieName] = useState("")
    
    const submitForm = (e) => {
        e.preventDefault()
        fetchMovies(movieName)
        fetchWebSeries(movieName)
    }

  return (
    <div className='navBar'>
        <h2 className='navHeading'>MoviesBank</h2>
        <form onSubmit={submitForm}>
            <input onChange={e => setMovieName(e.currentTarget.value)  } className='navInput' placeholder='Search a Movie' />
        </form>
    </div>
  )
}
