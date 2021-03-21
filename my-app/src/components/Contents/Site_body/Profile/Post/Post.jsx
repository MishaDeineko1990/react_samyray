// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Post.module.css'
import {NavLink} from "react-router-dom";



const Post = (props) =>{
    
    let posts = props.state.posts.map( d => <div>{d.message}</div> )
    return (
        <div >
            {posts}
        </div>
    )

}

export default Post;