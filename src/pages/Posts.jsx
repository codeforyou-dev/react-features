import useFetch from '../hooks/useFetch';
import React from "react";
import PostCard from './PostCard';
const Posts = () => {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log("data", data);

  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">Marketplace</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data && data.map((post) => {
        return <PostCard post={post}></PostCard>
      })}
    </div>
    </div>

  );
};

export default Posts;

