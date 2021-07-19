import React from 'react';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideReducer from "./side-reducer";



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

            newMessageText: ''
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

       this._state.profilePage= profileReducer(this._state.profilePage , action);
       this._state.dialogsPage= dialogsReducer(this._state.dialogsPage , action);
       this._state.SideBar= sideReducer(this._state.SideBar , action);

        this._callSubscriber(this._state)



    }
}






export default store;

