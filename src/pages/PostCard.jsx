
import React from "react";
const PostCard = ({ post }) => {
  console.log('post',post);
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-sm">
      {/* <img
        src={post?.image}
        alt={post?.title}
        className="w-full h-40 object-cover rounded-xl"
      /> */}
      <h2 className="text-xl font-bold mt-3">{post.title}</h2>
      <p className="text-gray-600 text-sm mt-2">{post.body}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
        Read More
      </button>
    </div>
  );
};

export default PostCard;

