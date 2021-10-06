import React, {Component} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return <div>

        <ProfileInfo/>
        <MyPostsContainer/>

    </div>
}

export default Profile;
