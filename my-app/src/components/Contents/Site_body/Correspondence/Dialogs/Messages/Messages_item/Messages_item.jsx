

import React from 'react';
import s from './Messages_item.module.css';
import {Route} from "react-router-dom";

const Messanges_item = (props) => {
    let dialogsElements = props.state.messages.map( d => <p>{d.message}</p>  );
    // console.log("frrrrrrrrrrrrrrrrrrrrrr")
    // console.log(props.state.messages);
    return <div>
        {dialogsElements}
    </div>

}


export default Messanges_item;