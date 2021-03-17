// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Dialogs_item.module.css';
import Messages from './Messages/Messages'
import {NavLink} from "react-router-dom";

const Dialogs_item = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default Dialogs_item;