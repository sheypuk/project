import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import basePost from './../../BasePost'

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you', likeCount: 12},
        {id: 2, message: 'it s my first', likeCount: 5},
    ]

    let postsElements = basePost.map (p => <Post message={p.message} likeCount={p.likeCount}/> )


    return (
        <div className={s.postBlock}>
            <h3>My post </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>


    )
}

export default MyPosts;
