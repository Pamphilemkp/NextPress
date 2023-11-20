import React from 'react';
import Link from "next/link";
import Image from 'next/image';


const Card = ({ post, handlePostViewed }) => {


  return (
    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
        <Link href={`post-details/${post.id}`} className="block w-full h-full" onClick={() => handlePostViewed(post)}>
                    <Image
                     alt={post.title}
                    src={`https://retrocket.github.io/retrocketeer-api${post.featured_image_url}`}
                    className="object-cover w-full max-h-40"
                    width={1000}
                    height={1000}
                    onError={() =>
                      <Image src={`https://retrocket.github.io/retrocketeer-api/images/posts/14.jpg`} alt="Fallback image" className="w-full max-w-full h-auto mb-8" height={1000} width={1000} />
                    }
                    />
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            {post.title}
                        </p>
                        <div className="flex items-center mt-6">
                            <a href="#" className="relative block">
                            <Image alt="blog photo"
                             src={`https://retrocket.github.io/retrocketeer-api${post.user.profile_image}`} 
                             className="object-cover w-full max-h-40 rounded-full"
                              width={40}
                               height={40}
                              onError={() =>
                                <Image src={`https://retrocket.github.io/retrocketeer-api/images/posts/14.jpg`} alt="Fallback image" className="w-full max-w-full h-auto mb-8" height={1000} width={1000} />
                              }
                               />
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    {post.user.name}  {post.user.surname}
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    {post.published_at}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>

    </div>
  );
};

export default Card;

