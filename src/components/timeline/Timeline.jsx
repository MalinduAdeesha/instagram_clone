import React, { useState } from 'react'
import '../timeline/Timeline.css'
import Sugesstions from './Sugesstions'
import Post from '../Post/Post'
import { Avatar } from '@mui/material'

const Timeline = () => {
  const[posts, setPost] = useState([
    {
      user:"Malindu",
      postImage:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
      likes:100,
      timespams:"1d",
    },
    {
      user:"Umesh",
      postImage:"https://c4.wallpaperflare.com/wallpaper/245/84/15/beautiful-girl-woman-images-1920x1080-wallpaper-preview.jpg",
      likes:22,
      timespams:"1h",
    },
    {
      user:"Pubudu",
      postImage:"https://buffer.com/library/content/images/2023/10/free-images.jpg",
      likes:98,
      timespams:"2d",
    },
    {
      user:"Janith",
      postImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes:120,
      timespams:"12d",
    },

  ])
  return (
    <div className='timeline'>
      <div className="timeline__left">
        {/* <div className='timeline__teftTop'>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
        </div> */}
        <div className="timeline__post">
        {posts.map((post) => (
         <Post 
          user={post.user} 
          postImage={post.postImage} 
          likes={post.likes} 
          timespams={post.timespams} />
      ))}
          
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions/>
      </div>
    </div>
  )
}

export default Timeline