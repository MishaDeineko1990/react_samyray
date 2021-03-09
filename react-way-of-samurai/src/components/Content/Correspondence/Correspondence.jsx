    import React from 'react';
    import s from './Correspondence.module.css';
    import Dialogs from './Dialogs/Dialogs';
    import Mes from './Mes/Mes';



    const Correspondence= () => {
        return (
        <div className = {s.dialog_wrap}>
          <div>
            <Dialogs />
          </div>
          <div>
            <Mes /> 
          </div>
            
              
        </div>
        )
    }

    export default Correspondence;