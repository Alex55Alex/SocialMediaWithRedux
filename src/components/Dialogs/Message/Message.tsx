import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props: any) => {
    let messageText: string = props.message;
    return (
        <div className={s.message}>
            {messageText}
        </div>
    )
}

export default Message;