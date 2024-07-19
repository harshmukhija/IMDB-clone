import React,{useEffect,useState} from 'react';
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Card from '../card/Card';


const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type}= useParams()

    useEffect(() => {
        getData()
      
    }, [])
    useEffect(() => {
        getData()
      
    }, [type])
    
    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type:"popular"}?api_key=ca0734dbd608bf8eb6024b227cd2a4a8&language=en-US`)
      .then(res=>res.json())
      .then(data=>setMovieList(data.results))
    }
  return (
    <>
    
    <div className="movie_list">
        <h2 className='list_title'>{(type? type:"POPULAR").toUpperCase()}</h2>
        <div className="list_cards">
            {
                movieList.map(movie=>(
                    <Card movie={movie}  />
                ))
            }
        </div>
    </div>
    </>
    )
}

export default MovieList