'use client'

import { useState, useEffect } from "react";

const page = ({ params }) => {
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
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>{post?.title}</h2>
        <p>{post?.content}</p>
        <p>{post?.published_at}</p>
    </div>
  )
}

export default page