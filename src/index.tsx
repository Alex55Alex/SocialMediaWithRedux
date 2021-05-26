import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData: any = [
    {id: '1', name: "Alex"},
    {id: '2', name: "Vova"},
    {id: '3', name: "Evgen"},
    {id: '4', name: "Petya"},
    {id: '5', name: "Viktor"},
    {id: '6', name: "Valera"},
    {id: '7', name: "Vasya"}

];
const messageData: any = [
    {id: '0', message: "How are you?)"},
    {id: '1', message: "Hi"},
    {id: '2', message: "I am very tired"}
];
const postData: any = [
    {message: 'Hi it/`s my first post', id: '0', likeCount: 10},
    {message: 'I like burgers', id: '1', likeCount: 3},
    {message: 'Do you like me?', id: '2', likeCount: 7},

];
ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messageData={messageData} postData = {postData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
