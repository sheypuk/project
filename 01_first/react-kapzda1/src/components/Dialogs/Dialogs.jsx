import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import Post from "../Profile/MyPosts/Post/Post";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch ({type: 'addMessage'});
    };

    let onMessageChange = () => {
        let text= newMessageElement.current.value;
        props.dispatch({type: 'updateNewMessageText' ,  newMessage: text});

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
                    <div className={s.message}>
                        <textarea
                            onChange={onMessageChange}
                            ref={newMessageElement}
                            value={props.newMessageText}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add post</button>
                    </div>
                    <div>
                        {messagesElements}
                </div>

            </div>
        </div>
</div>
)
}

export default Dialogs;