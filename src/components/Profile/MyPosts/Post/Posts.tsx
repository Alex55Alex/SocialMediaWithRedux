import React from "react";
import s from './Post.module.css';
const Post: () => JSX.Element = () => {
  return (
    <div>
      <div className={s.item}>
        <img src="http://user-life.com/uploads/posts/2018-08/1535602801_kak-delat-avatarki-krasivye-prikolnye-krutye-dlya-devushek-besplatno-foto-kartinki-dlya-vk-stima-yutuba-instagram-vatsapa.jpg" alt="" />
        <p>Hello, how are you?</p>
      </div>
      <a href="#">like</a>
    </div>
  )
}

export default Post;