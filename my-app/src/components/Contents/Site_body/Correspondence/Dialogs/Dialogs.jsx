// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"
import Dialogs_item from './Dialogs_item/Dialogs_item';
import Messages from './Messages/Messages';



const Dialogs = (props) =>{

    let dialogsElements = props.state.dialogs.map( d => <Dialogs_item name={d.name} id={d.id} messages={d.messages}/>  );
    // let messagesElements = props.state.dialogs.map( d => <Route path={'/dialogs/ '+ d.id } render={ () => <Messages id={d.id} messages={d.messages}/> }/>  );
    let messagesElements = props.state.dialogs.map( d => <Messages id={d.id} messages={ d.messages}/>  );


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div>
                {/* <Messages/> */}
                { messagesElements }   
            </div>            
        </div>
    )

}

export default Dialogs;