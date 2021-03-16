import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import state from "./redux/state";

// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';

function App() {
  return (
    <BrowserRouter>  
      <div>
        <Header />
        <Contents state={state}/>
        {/* <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> }/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
