import React from "react";
import s from './ProfileInfo.module.css';
let ProfileInfo: () => JSX.Element = () => {
  return (
    <div>
      <div>
        <img src="https://bipbap.ru/wp-content/uploads/2017/04/81074043_lovelylandscapes101.jpg" alt="" className={s.img} />
      </div>
      <div className={s.descriptionBlock}>
        Ava + desc
       </div>
    </div>
  )
}
export default ProfileInfo;