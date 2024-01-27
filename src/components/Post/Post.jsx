import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import { BookmarkBorder, ChatBubbleOutline,  FavoriteBorder, MoreHoriz, Telegram } from '@mui/icons-material'

const Post = ({user ,postImage ,likes , timespams}) => {
  return (
    <div className='post'>

        <div className="post__header">
            <div className="post__headerAuthor">
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            <div className='name'>{user}  .</div>
                <span>{timespams}</span>
            </div>
            <MoreHoriz/>
        </div>

        <div className="post__image">
            <img src={postImage} alt="" />
        </div>

        <div className="post__footer">
            <div className="post__footerIcons">
                <div className="post__iconsMain">
                    <FavoriteBorder className='postIcon'/>
                    <ChatBubbleOutline className='postIcon'/>
                    <Telegram className='postIcon'/>
                </div>
                <div className="post__iconsSave">
                    <BookmarkBorder className='postIcon'/>
                </div>
            </div>
            Liked by {likes} people.
        </div>
    </div>
  )
}

export default Post