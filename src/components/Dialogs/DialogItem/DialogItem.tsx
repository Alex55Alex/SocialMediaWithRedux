import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props: any) => {
    let id: string = "/dialogs/" + props.id;
    let name: string = props.name;
    return (
        <div className={s.dialog}>
            <NavLink to={id}>
                <div><img src="https://i.pinimg.com/originals/39/69/5e/39695e35b889a3516dc7c33aa66d1df5.png"
                          alt="dialogAvatar"/></div>
                <div>{name}</div>
            </NavLink>
        </div>
    )
}

export default DialogItem;