import React from 'react';


const PostViewed = ({post}) => {
    console.log(post.title)
    return (
      <li key={post.id}>
        {post !== null ? (
                // If post is not null, display the post content
            <p>
                <span>{post.id}</span> {'. '}
                <span className="text-blue-400">{post.title}</span>
            </p>
            ) : (
                // If post is null, display a message
             <p>No post viewed yet.</p>
            )}
      </li>
    );
  };
  
  export default PostViewed;
  