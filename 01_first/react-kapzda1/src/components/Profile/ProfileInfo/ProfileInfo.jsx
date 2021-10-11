import React, { Component} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>

        <div>
            <img src=' '/>
        </div>


        <div className={s.discriptionBlock}>
            <img src ={props.profile.photos.large}/>
            ava + descriptoin
        </div>

    </div>
}

export default ProfileInfo;
