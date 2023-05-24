
import MovieCard from "./components/MovieCard";
import "./App.css"
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Navbar from "./components/NavBar";

function  App()
{
  const [movies,setMovies] = useState([])
  const [series,setSeries] = useState([])

  function fetchMovies(whatToSearch) {
    const url = `http://www.omdbapi.com/?apikey=b47b466f&type=movie&s=${whatToSearch}`
    fetch(url)
    .then(response => 
    {
      response.json().then(data => {
        setMovies(data.Search)

      })
    })
  }

  function fetchWebSeries (whatToSearch) {
    const url = `http://www.omdbapi.com/?apikey=b47b466f&type=series&s=${whatToSearch}`
    fetch(url)
    .then(response => 
    {
      response.json().then(data => {
        setSeries(data.Search)
      })
    })
  }

  useEffect(() => {
    fetchMovies('harry')
    fetchWebSeries('harry')
  },[])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="outer">
    <Navbar fetchMovies={fetchMovies} fetchWebSeries={fetchWebSeries} />

    <h3 style={{color: "white",textAlign:"center"}}>Movies</h3>
    <Slider {...settings}>
       {movies.map(movie =>        <MovieCard image={movie.Poster} title={movie.Title} />)}
    </Slider>

    <br />
    <br />
    <h3 style={{color:"white",textAlign:"center"}}>Web Series</h3>
    <Slider {...settings}>
    {series.map(movie =>        <MovieCard image={movie.Poster} title={movie.Title} />)}
 </Slider>

    </div>
  )
}

export default App;