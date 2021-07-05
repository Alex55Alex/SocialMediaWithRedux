import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let rerenderEntireTree: void | any = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});
rerenderEntireTree();
reportWebVitals();
