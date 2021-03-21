
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {add_post} from './redux/state';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} add_post={add_post}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}