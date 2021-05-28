import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts: (props: any) => JSX.Element = (props) => {
    let postElement: any = React.createRef();
    const addPost: () => void = () => {
        props.addPost(postElement.current.value);
    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <textarea ref={postElement}></textarea>
            <div>
                <button onClick={addPost}>send</button>
            </div>
            {
                props.postData.map((post: any) => {
                    return <Post message={post.message} id={post.id} likeCount={post.likeCount}/>
                })
            }
        </div>

    )
}

export default MyPosts;