import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state'
import {addPostText} from './redux/state'
export let rerenderEtireTree: void | any = (state: any) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addPostText={addPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



reportWebVitals();
