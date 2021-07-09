import React from 'react';


let rerenderEntireTree = () => {
    console.log ('State was chaged')
};

let state = {
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


}


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)

}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)

}

export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,

    };
    state.dialogsPage.messages.push(newMessage);
    state.profilePage.newMessageText = '';
    rerenderEntireTree(state)
}

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state)

}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;
