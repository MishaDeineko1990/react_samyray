// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Post.module.css'
import {NavLink} from "react-router-dom";



const Post = (props) =>{

    let posts = props.state.posts.map( d => 
        <div className={s.wrap}>
            <div>
                {d.message}
            </div>
            <div>
                Like; {d.likesCount}
            </div>        
        </div> )

    let newPostElement = React.createRef();

    let add_post = () => {
        debugger;
        let text = newPostElement.current.value;
        props.add_post(text);
        newPostElement.current.value = '';
    }



    return (
        <div >

            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={ add_post }>Add post</button>
                </div>
            </div>
            
            {posts}
            

        </div>
    )

}

export default Post;