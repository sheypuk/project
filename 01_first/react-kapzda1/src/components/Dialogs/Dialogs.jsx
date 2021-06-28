import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import baseDialogs from './../BaseDialogs';
import baseMessage from './../BaseMessage';



const Dialogs = (props) => {

    let Dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alena'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Alecsandr'},
        {id: 5, name: 'Roman'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your doin?'},
        {id: 3, message: 'Nice'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'wi'}
    ]

    let dialogsElements = baseDialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = baseMessage.map(m => <Message message={m.message}/>);


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