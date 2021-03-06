import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Posts.module.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        let arr = res.data;
        let randomIndexes = {
          a: Math.round(Math.random() * arr.length),
          b: Math.round(Math.random() * arr.length),
          c: Math.round(Math.random() * arr.length),
        };
        setPosts([
          arr[randomIndexes.a],
          arr[randomIndexes.b],
          arr[randomIndexes.c],
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ul className={classes.wrapper}>
        {posts.map((post) => (
          <li key={post.id} className={classes.content}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
