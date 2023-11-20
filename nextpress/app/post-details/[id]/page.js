'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';

const Page = ({ params }) => {
  const id  = params.id;
  const [post, setPost] = useState(null);
  
  const fetchApi = async(id) => {

    try {

        const api = await fetch(`https://retrocket.github.io/retrocketeer-api/post-details/${id}.json`, { next: { validate: 60}});
        const res = await api.json();
        setPost(res);

        }

    catch (error) {
            console.error('Error fetching data:', error);
    }
}

        useEffect(()=>{
            fetchApi(id);
        }, [id]);


  return (
    <div className="max-w-7xl mx-6 md:mx-auto my-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto pb-10">
            
            <div className="py-8">
                <h1 className="text-3xl font-bold mb-2">{post?.title}</h1>
                <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    {post?.user.name}  {post?.user.surname}
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    {post?.published_at}
                                </p>
                            </div>
                </div>
    
            
            <Image src={`https://retrocket.github.io/retrocketeer-api${post?.featured_image_url}`}
             alt="Featured image description"
               className="w-full max-w-full h-auto mb-8"
               width={1000} 
               height={1000}
               onError={() =>
                <Image src={`https://retrocket.github.io/retrocketeer-api/images/posts/14.jpg`} alt="Fallback image" className="w-full max-w-full h-auto mb-8" height={1000} width={1000} />
              }
                />
    
            
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                <p>
                  {post?.content}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Page;