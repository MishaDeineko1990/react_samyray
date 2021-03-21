// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Correspondence.module.css';
import {NavLink} from "react-router-dom";
import Dialogs from './Dialogs/Dialogs';



const Correspondence = (props) =>{
    // console.log("start Correspondence start");
    // console.log(props);
    // console.log("end Correspondence start");

    return (
        <div>
            <Dialogs state={props.state}/>
        </div>
    )

}

export default Correspondence;