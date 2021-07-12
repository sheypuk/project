import React from 'react';


let store = {
    _state : {
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
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log ('State was chaged');
    },

     addPost  ()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };

        this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state)

    },
     updateNewPostText  (newText)  {
         this._state.profilePage.newPostText = newText;
         this._callSubscriber(this._state)

    },
    addMessage  ()  {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,

        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.profilePage.newMessageText = '';
        this._callSubscriber(this._state)
    },
    updateNewMessageText  (newMessage)  {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state)

    },
    subscribe  (observer)  {
        this._callSubscriber = observer;
    }
}


export default store;
