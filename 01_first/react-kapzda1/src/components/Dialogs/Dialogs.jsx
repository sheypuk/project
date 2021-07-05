import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements =
        props.state.messages.map(m => <Message message={m.message}/>);

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        alert (text);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            {/*<div className={s.messages}>
                {messagesElements}
            </div>*/}

            <div className={s.messages}>
                <div>
                    <div div className={s.message}>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;