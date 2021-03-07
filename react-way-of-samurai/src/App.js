import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Message from './components/Content/Message/Message';

const App = () => {
    return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile' component={Profile}/>
          <Route path='/message' component={Message}/>

        </div>
      </div>
      </BrowserRouter>
      );
}


export default App;