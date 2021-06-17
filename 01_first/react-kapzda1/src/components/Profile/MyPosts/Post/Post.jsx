import React, { Component} from 'react';
import s from './Post.module.css';

const Post = () => {
    return (

                <div className={s.item}>
                <img src='https://miro.medium.com/fit/c/1360/1360/1*x7X2oAehk5M9IvGwO_K0Pg.jpeg'/>
                    Post 1
                    <div>
                        <span>like</span>
                        </div>

            </div>

    )
}

export default Post;
