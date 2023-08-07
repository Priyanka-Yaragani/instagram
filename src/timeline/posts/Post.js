import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { BookmarkBorder, ChatBubbleOutline, Favorite, FavoriteBorder, Telegram } from '@mui/icons-material';

function Post({user, postImage, likes, timestamp }) {
  return (
    <div className="post">
        <div className="post_header">
            <div className="post_headerAuthor">
                <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                {user} . <span>{timestamp}</span>
            </div>
            <MoreHorizIcon/>
        </div>
        <div className="post_image">
            <img 
                src={postImage}
                alt=''
            />
        </div>
        <div className="post_footer">
            <div className='post_footerIcons'>
                <div className='post_iconsMain'>
                    <FavoriteBorder className="postIcon"/>
                    <ChatBubbleOutline className="postIcon"/>
                    <Telegram className="postIcon"/>
                </div>
                <div className='post_iconsave'>
                    <BookmarkBorder className="postIcon"/>
                </div>
            </div>
            Liked by {likes} people.
        </div>
    </div>
  )
}

export default Post