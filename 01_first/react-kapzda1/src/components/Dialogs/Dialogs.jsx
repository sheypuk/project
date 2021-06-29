import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import base from "../../index.js";



const Dialogs = (props) => {



    let dialogsElements = (base.Dialog).map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = (base.messages).map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;