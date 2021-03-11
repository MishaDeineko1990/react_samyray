// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Correspondence.module.css';
import {NavLink} from "react-router-dom";
import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages'


const Correspondence = () =>{

    return (
        <div>
            <Dialogs/>  
            <Messages/>       
        </div>
    )

}

export default Correspondence;