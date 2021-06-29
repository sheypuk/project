import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let Dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Alena'},
    {id: 3, name: 'Oleg'},
    {id: 4, name: 'Alecsandr'},
    {id: 5, name: 'Roman'}
]



let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are your doin?'},
    {id: 3, message: 'Nice'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'wi'}
]




let posts = [
    {id: 1, message: 'Hi, how are you', likeCount: 12},
    {id: 2, message: 'it s my first', likeCount: 5},
]


let base = [
    {posts},
    {messages},
    {posts}

]




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default base;
