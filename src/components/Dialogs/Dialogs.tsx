import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {addMessageTextActionCreator, addMessageActionCreator} from '../../redux/dialog-reducer';

const Dialogs: (props: any) => JSX.Element = (props) => {
    const addMessageText = (event:any) => {
        let action = addMessageTextActionCreator(event.target.value);
        props.dispatch(action);
    };
    const addMessage = () =>{
    let action = addMessageActionCreator();
    props.dispatch(action)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.state.dialogsData.map((dialogData: any) => {
                        return <DialogItem name={dialogData.name} id={dialogData.id}/>
                    })
                }

            </div>
            <div className={s.messages}>
                {
                    props.state.messageData.map((messageItem: any) => {
                        return <Message message={messageItem.message} id={messageItem.id}/>
                    })
                }

            </div>
            <textarea  onChange={(event:any) => addMessageText(event)} value={props.state.messageText}/>
            <button onClick={addMessage}>send</button>
        </div>
    )
}
export default Dialogs;