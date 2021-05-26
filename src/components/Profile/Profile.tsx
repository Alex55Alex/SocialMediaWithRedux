import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


let Profile: (props: any) => JSX.Element = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}
export default Profile;