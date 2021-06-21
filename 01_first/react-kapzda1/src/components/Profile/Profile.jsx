import React, { Component} from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>
        <div>
            <img src=' https://img.freepik.com/free-photo/laptop-and-books-copy-space_23-2148475431.jpg?size=626&ext=jpg'/>
        </div>


        <div>
            ava + descriptoin
        </div>
        <MyPosts />

    </div>
}

export default Profile;
