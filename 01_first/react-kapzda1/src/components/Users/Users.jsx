import React from "react";
import styles from './users.module.css'

let Users = (props) => {

    if ( props.users.length===0) {


        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://sun9-39.userapi.com/c857620/v857620197/1280d6/6Q7uwq5poqg.jpg?ava=1',
                    followed: false,
                    fullname: 'Alena',
                    status: 'kabachok',
                    location: {city: 'Kaliningrad', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://sun9-39.userapi.com/c857620/v857620197/1280d6/6Q7uwq5poqg.jpg?ava=1',
                    followed: false,
                    fullname: 'Roman',
                    status: 'god',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://sun9-39.userapi.com/c857620/v857620197/1280d6/6Q7uwq5poqg.jpg?ava=1',
                    followed: true,
                    fullname: 'Dmitriy',
                    status: 'baran',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;