import useFetch from '../hooks/useFetch';
import React from "react";
import PostCard from './PostCard';
const Posts = () => {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log("data", data);

  return (
    <div>
      {data && data.map((post) => {
        return <PostCard post={post}></PostCard>
      })}
    </div>

  );
};

export default Posts;

