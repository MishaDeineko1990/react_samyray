// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Messages.module.css';
import {Route} from "react-router-dom";
import Messages_item from './Messages_item/Messages_item';




const Messages = (props) =>{

   

    return (
        <div>
            <Route path={'/dialogs/'+props.id} render={ (props) => <Messages_item state={props.message} /> }/>
        </div>
    )

}

export default Messages;