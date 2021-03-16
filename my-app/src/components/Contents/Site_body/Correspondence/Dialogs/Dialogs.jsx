// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"

const Dialogs = (props) =>{

    console.log("props open")
    console.log(props);
    console.log("close close")

    return (
        <div>
            <NavLink to ="/Messange/0">Dima</NavLink>
            <br/>
            <NavLink to ="/Messange/1">Kolia</NavLink>
        </div>
    )

}

export default Dialogs;