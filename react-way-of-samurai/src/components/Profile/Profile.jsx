import React from 'react';
import s from './Profile.module.css';
import My_posts from './My_posts/My_posts';


const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div>
      ava + description
    </div>
    <My_posts />
  </div>
}

export default Profile;