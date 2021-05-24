import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
let Profile: () => JSX.Element = () => {
  return (
    <div>
      <div>
        <img src="https://bipbap.ru/wp-content/uploads/2017/04/81074043_lovelylandscapes101.jpg" alt="" className={s.img} />
      </div>
      <div>
        Ava + desc
       </div>
      <MyPosts />
    </div>
  )
}
export default Profile;