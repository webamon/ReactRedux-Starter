import React from 'react'


const IMAGE = 'https://image.tmdb.org/t/p/w500'

const VideoListItem = ({movie})=>{
    return(
        <li>
            <img src={`${IMAGE}${movie.backdrop_path}`} alt={movie.title}/>
            <h3>{movie.title}</h3>
        </li>
    )
}

export default VideoListItem