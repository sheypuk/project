import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>

}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Alena" id="2"/>
                <DialogItem name="Oleg" id="3"/>
                <DialogItem name="Alecsandr" id="4"/>
                <DialogItem name="Roman" id="5"/>

            </div>

            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are your doin?" />
                <Message message="Nice" />
            </div>
        </div>
    )
}

export default Dialogs;