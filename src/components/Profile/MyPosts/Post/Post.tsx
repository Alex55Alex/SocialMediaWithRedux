import React from "react";
import s from './Post.module.css';

const Post: (props: any) => JSX.Element = (props) => {
    const message: string = props.message;
    const likeCount: number = props.likeCount;
    return (
        <div>
            <div className={s.item}>
                <img
                    src="http://user-life.com/uploads/posts/2018-08/1535602801_kak-delat-avatarki-krasivye-prikolnye-krutye-dlya-devushek-besplatno-foto-kartinki-dlya-vk-stima-yutuba-instagram-vatsapa.jpg"
                    alt=""/>
                <p>{message}</p>
            </div>
            <div>
                likes {likeCount}
            </div>

        </div>
    )
}

export default Post;