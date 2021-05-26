import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props: any) => {
    let id: string = "/dialogs/" + props.id;
    let name: string = props.name;
    return (
        <div className={s.dialog}>
            <NavLink to={id}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;