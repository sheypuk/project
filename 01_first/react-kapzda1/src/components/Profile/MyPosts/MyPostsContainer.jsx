import React, {Component} from 'react';

import {
    addPostActionCreator,
    upadateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";



const map_StateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const map_DispatchToProps = (dispatch) => {
    return {
        upadateNewPostText: (text) => {
            let action = upadateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(map_StateToProps, map_DispatchToProps) (MyPosts);


export default MyPostsContainer;
