import React from 'react';
import s from './My_posts.module.css';
import Post from './Post/Post';

const My_posts = () => {
  return <div className={s.content}>
  
      My posts
    <div>
      <textarea name="" id="" cols="30" rows="2"></textarea>
      <br/>
      <button>Add poist</button>
    </div>
    <div className={s.posts}>
      <Post message = "HI, how are you?" like ="10"/>
      <Post message = "It`s my first post" like ="100"/>
    </div>


  </div>
}

export default My_posts;