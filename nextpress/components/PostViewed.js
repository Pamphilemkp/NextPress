import React from 'react';
import Link from 'next/link'


const PostViewed = ({post}) => {
    console.log(post.title)
    return (
      <li key={post.id}>
        {post !== null ? (
                // If post is not null, display the post content
                <Link className="flex items-center justify-start w-full p-4  font-thin text-blue-500 underline" href={`post-details/${post.id}`}>
                  <span className="text-left">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                        </path>
                    </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">
                            {post.title}
                    </span>
                    </Link>
            ) : (
                // If post is null, display a message
             <p className="mx-4 text-sm font-normal">No post viewed yet.</p>
            )}
      </li>
    );
  };
  
  export default PostViewed;
  