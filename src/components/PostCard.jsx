
import React from "react";
import { useDispatch } from "react-redux";
import {addItemToCart} from '../store/cartSlice';
const PostCard = ({ post }) => {
  console.log('post',post);

  const dispatch=useDispatch();
  const handleAddToCart = () => {
    console.log('Add to cart clicked');
    dispatch(addItemToCart(post));
  }
  return (
    <div
    key={post.id}
    className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-sm transition-transform transform hover:scale-105"
  >
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
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700" onClick={handleAddToCart}>  
        Add to Cart
      </button>
    </div>
  );
};

export default PostCard;

