const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;

        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,

            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        default:
            return state;
    }


}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const upadateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;