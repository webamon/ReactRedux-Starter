import React from 'react'

import VideoListItem from '../components/video-list-item'

const VideoList = ()=>{

    const movies = ["film 1", "film 2", "film 3", "film 4"]

    return(
        <ul>
            {
                movies.map(movie =>{
                    return <VideoListItem movie={movie}/>
                })
            }
        </ul>
    )
}

export default VideoList