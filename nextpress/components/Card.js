import React from 'react';
import Link from "next/link";


const Card = ({ post, handlePostViewed }) => {
  // After clicking on apost, pass it to the handle click as an argument
  // const handleClick = (post) => {
  //   RecentlyViewed(post);
  //   console.log(post);
  // };

 

  return (
    <li key={post.id} className="border-4 border-gray-700 my-4 p-3 rounded-sm" onClick={() => handlePostViewed(post)}>
      <Link href={`post-details/${post.id}`}>
        <h1>{post.title}</h1>
        <p>published_at: {post.published_at}</p>
      </Link>
    </li>
  );
};

export default Card;
