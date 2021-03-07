import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFEBHN6bWFD87Y6B4REfOSaKR-jMFZ0S2hA&usqp=CAU" alt=""/>

        <span>{props.message}</span>
        <span className={s.like}> like: {props.like}</span>

      </div>
}

export default Post;