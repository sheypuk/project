import React, { Component} from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

                <div className={s.item}>
                <img src="/Photo/avatar.png"/>
                    { props.message }
                    <div>
                        <span>like</span>  {props.likeCount}
                        </div>

            </div>

    )
}

export default Post;
