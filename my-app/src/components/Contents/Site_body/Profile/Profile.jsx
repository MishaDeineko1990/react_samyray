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
    // console.log(props.state)
    return (
        <div>
            <Info_banner state={props.state}/>
            <Post state={props.state}/>
        </div>
    )

}

export default Profile;