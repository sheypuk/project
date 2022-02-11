import React from 'react';
import {addMessageActionCreator, upadateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: () => {
            dispatch(addMessageActionCreator());;
        },
        upadateNewMessageTextAction: (text) => {
            dispatch(upadateNewMessageTextActionCreator(text));
        }
    }
}

const  DialogsContainer = connect(mapStateToProps ,mapDispatchToProps ) (Dialogs) ;

export default DialogsContainer;