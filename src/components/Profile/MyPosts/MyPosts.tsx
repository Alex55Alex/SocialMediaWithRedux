import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Posts";
const MyPosts: () => JSX.Element = () => {
  return (
    <div>
      <p>My posts</p>
      <textarea></textarea>
      <button>send</button>
      <button>remove</button>
      <Post />
      <Post />
      <Post />
    </div>

  )
}

export default MyPosts;