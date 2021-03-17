// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"
import Dialogs_item from './Dialogs_item/Dialogs_item';


const Dialogs = (props) =>{

    // console.log("props Dialogs open")
    // console.log(props);
    // console.log("close Dialogs close")
    let dialogsElements = props.state.dialogs.map( d => <Dialogs_item name={d.name} id={d.id} messages={d.messages}/>  );
    // console.log("props dialogsElements open")
    // console.log(dialogsElements);
    // console.log("close dialogsElements close")
   const upath =window.location.href.toString();
//    .reverse().indexOf('/')

    function reverseString(str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
     
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
     
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
        
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }
     
    const revupath = reverseString(upath);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>            
        </div>
    )

}

export default Dialogs;