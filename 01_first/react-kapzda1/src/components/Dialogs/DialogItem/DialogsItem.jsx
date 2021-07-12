import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog}>
        <div className={s.DiaNam}>
        <img src="/Photo/avatar.png"/>
        <NavLink to={path} className={s.dialog} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>


}




export default DialogItem;