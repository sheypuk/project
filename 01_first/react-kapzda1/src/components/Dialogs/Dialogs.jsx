import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let state= props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id}id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageText = state.newMessageText;


    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.upadateNewMessageTextAction(text);


    };



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

                    <div>
                        {messagesElements}
                </div>
                    <div className={s.message}>
                        <textarea
                            onChange={onMessageChange}
                            value={newMessageText}
                            placeholder='Enter your message'
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add post</button>
                    </div>

            </div>
        </div>
</div>
)
}

export default Dialogs;