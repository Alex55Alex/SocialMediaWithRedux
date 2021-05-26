import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts: (props: any) => JSX.Element = (props) => {
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <textarea></textarea>
            <div>
                <button>send</button>
            </div>
            {
                props.postData.map((post : any) => {
                    return <Post message={post.message} id={post.id} likeCount={post.likeCount}/>
                })
            }
        </div>

    )
}

export default MyPosts;