import React from 'react'

import VideoListItem from '../components/video-list-item'

const VideoList = ({movieList})=>{
    return(
        <ul>
            {
                movieList.map(movie =>{
                    return <VideoListItem movie={movie} key={movie.id} />
                })
            }
        </ul>
    )
}

export default VideoList