import React from 'react';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let store = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, message: 'Hi, how are you', likeCount: 12},
                {id: 2, message: 'it s my first', likeCount: 5},
            ],
            newPostText: 'itkamasutra'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Alena'},
                {id: 3, name: 'Oleg'},
                {id: 4, name: 'Alecsandr'},
                {id: 5, name: 'Roman'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are your doin?'},
                {id: 3, message: 'Nice'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'wi'}
            ],

            newMessageText: 'itkamasutra1'
        },

        SideBar: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Alena'},
                {id: 3, name: 'Oleg'},

            ],

        }


    },

    _callSubscriber() {
        console.log('State was chaged');
    },
    getState() {
        return this._state;
    },


    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,

        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.profilePage.newMessageText = '';
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state)

    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,

            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.profilePage.newMessageText = '';
            this._callSubscriber(this._state)
        }

    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})


/*export const addPostActionCreator = () => {           ТОже саме что сверхую

    return {
        type: ADD_POST
    }
}*/

export const upadateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const upadateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})


export default store;

