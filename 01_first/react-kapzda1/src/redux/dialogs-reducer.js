const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessage;
            return state;
        }
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText,

            };
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        default:
            return state;
    }


}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const upadateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;