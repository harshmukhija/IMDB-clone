import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <div className='header'>
        <div className="headerLeft">
            <Link to="/"><img className="header_icon" src="https://letstalkhair.tv/wp-content/uploads/2019/07/imdb_logo_png_699617.png" /></Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>

        </div>
      
    </div>
  )
}

export default Header
