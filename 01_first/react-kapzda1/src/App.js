import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";


const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav state={props.state.SideBar}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}  /> }/>
                <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> }/>
                <Route path='/music' render={ () => <Music /> }/>
                <Route path='/news' render={ () => <News /> }/>
                <Route path='/Settings' render={ () => <Settings /> }/>

            </div>

        </div>
        )
}


export default App;
