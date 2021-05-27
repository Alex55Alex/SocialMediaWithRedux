import React from "react";
import s from './SideBarFriend.module.css';

const SideBarFriend: (props: any) => JSX.Element = (props) => {
    return (
        <div className = {s.friend}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default SideBarFriend;