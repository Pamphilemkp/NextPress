import React from 'react';
import Link from "next/link";
import RecentlyViewed from '@/components/RecentlyViewed';

const Card = (post) => {
    
  // After clicking on apost  pass it to the handle click as an argument
  const handleClick = (post) => {
    RecentlyViewed(post)
   };

  return (
    <li key={post.id}>
    <Link href={`post-details/${post.id}`} onClick={ () => handleClick(post)}>
      <h1>{post.title}</h1>
      <p>published_at: {' '}{post.published_at}</p>
    </Link>
    
    </li>
  )
}

export default Card;