import React, {Component} from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import f from "../Friends/Dialogs.module.css"


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>
           {/* <StoreContext.Consumer>
                {
                    (store) => {
                        let state = store.getState();
                        <div>
                            <Friends state={state.SideBar}/>
                        </div>
                    }
                }
                </StoreContext.Consumer>*/}

        </nav>
    )
}

export default Nav;
