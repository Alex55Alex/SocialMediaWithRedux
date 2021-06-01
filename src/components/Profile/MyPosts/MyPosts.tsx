import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let postElement: any = React.createRef();
const MyPosts: (props: any) => JSX.Element = (props) => {

    const addPost: () => void = () => {
        props.addPost(postElement.current.value);
        props.addPostText('');
    }
    const addPostText: () => void = () => {
        props.addPostText(postElement.current.value);

    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <textarea ref={postElement} onChange={addPostText} value={props.state.postText}/>
            <div>
                <button onClick={addPost}>send</button>
            </div>
            {
                props.state.postData.map((post: any) => {
                    return <Post message={post.message} id={post.id} likeCount={post.likeCount}/>
                })
            }
        </div>

    )
}

export default MyPosts;
