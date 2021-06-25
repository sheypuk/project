import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog}>
        <NavLink to={path} className={s.dialog} activeClassName={s.active}>{props.name}</NavLink>
    </div>

}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

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

    let dialogsElements = Dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = messages.map(m => <Message message={m.message}/>);


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