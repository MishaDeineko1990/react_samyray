// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Profile.module.css';
import {NavLink} from "react-router-dom";
import Post from './Post/Post';
import Info_banner from "./Info_banner/Info_banner";




const Profile = (props) =>{

    

    return (
        <div>
            <Info_banner/>
            <Post state={props.state} add_post={props.add_post}/>
        </div>
    )

}

export default Profile;