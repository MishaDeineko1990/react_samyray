// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Site_body.module.css';
import {NavLink, Route} from "react-router-dom";
import Correspondence from './Correspondence/Correspondence';
import Profile from './Profile/Profile'


const Site_body = (props) =>{
  

    return (
        <div>
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> }/>
          <Route path='/message' render={ () => <Correspondence state={props.state.dialogsPage} /> }/>
        </div>
    )

}

export default Site_body;