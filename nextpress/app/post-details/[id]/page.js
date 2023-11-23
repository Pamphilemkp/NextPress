'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';

const Page = ({ params }) => {
  const id  = params.id;
  const [post, setPost] = useState(null);

  // handle image Not showing but a custom one
  const [imageLoadingStatus, setImageLoadingStatus] = useState({});
  const fallbackImage = 'https://images.unsplash.com/photo-1644792863360-40fa85ea52e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D'; 

  const handleImageError = (event, imageURL) => {
    event.preventDefault();
    setImageLoadingStatus((prevState) => ({ ...prevState, [imageURL]: false }));
  };

  const renderImage = (imageURL) => {
    if (imageLoadingStatus[imageURL] === false) {
      return (
        <Image
          alt="Featured image description for fallback image an error occured in the original image"
          src={fallbackImage}
          className="w-full max-w-full h-auto mb-8"
          width={1000}
          height={1000}
        />
      );
    }

    return (
      <Image
        alt="Featured image description"
        src={`${imageURL}`}
        onError={(event) => handleImageError(event, imageURL)}
        className="w-full max-w-full h-auto mb-8"
        width={1000}
        height={1000}
      />
    );
  };

  // fetching the post details api
  
  const fetchApi = async(id) => {
    try {
      const api = await fetch(`https://retrocket.github.io/retrocketeer-api/post-details/${id}.json`, { next: { validate: 60}});
      const res = await api.json();
      setPost(res);

       }catch (error) {
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
               {renderImage(`https://retrocket.github.io/retrocketeer-api${post?.featured_image_url}`)}
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