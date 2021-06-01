import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


let Profile: (props: any) => JSX.Element = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost} addPostText={props.addPostText}/>
        </div>
    )
}
export default Profile;