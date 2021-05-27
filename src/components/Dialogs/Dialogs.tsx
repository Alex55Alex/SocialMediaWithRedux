import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from "./Message/Message";


const Dialogs: (props: any) => JSX.Element = (props) => {
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
        </div>
    )
}
export default Dialogs;