import React from  'react';
import styles from './users.module.css';

let Users = (props) => {



    if (props.users.length===0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'http://cdn.onlinewebfonts.com/svg/img_235552.png',
                    followed: false,
                    fullName: 'Dmitrit',
                    status: 'Fly',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'http://cdn.onlinewebfonts.com/svg/img_235552.png',
                    followed: false,
                    fullName: 'Roma',
                    status: 'Fly',
                    location: {city: 'kaliningrad', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'http://cdn.onlinewebfonts.com/svg/img_235552.png',
                    followed: true,
                    fullName: 'Aleksandr',
                    status: 'Fly',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map (u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=> {props.unfollow (u.id)}}>Unfollow</button>
                            : <button onClick={()=> {props.follow(u.id)}} >Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
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

export  default Users;