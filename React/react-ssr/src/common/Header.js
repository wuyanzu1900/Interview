import React, { useState, useEffect } from 'react';
import axios from 'axios'

function reqAction(){
    return axios('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
}
function Header(){
    const [ song, setSong ] = useState(window.songs)
    useEffect(() => {
        reqAction().then(res =>{
            setSong(res.data)
        })
    }, [])
    return (
        <div>
            Hello World
            {song?.result?.songs.length}
        </div>
    )
}
export default Header