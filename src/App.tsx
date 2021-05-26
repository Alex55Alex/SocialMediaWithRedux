import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App: (props: any) => JSX.Element = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                    <Route path='/profile' component={() => <Profile postData={props.postData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
