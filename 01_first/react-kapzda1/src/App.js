import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>

            </div>

        </div>
    )
}


export default App;
