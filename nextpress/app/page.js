
'use client'

import { useEffect, useState } from "react";
import Card from '@/components/Card';
import RecentlyViewed from "@/components/RecentlyViewed";


export default function Home() {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState('posts/1');
    const [viewedPost, setViewedPost] = useState(null);

  const handlePostViewed = (clickedPost) => {
    setViewedPost(clickedPost);
  }

  const fetchApi = async(id) => {
        try {

            const api = await fetch(`https://retrocket.github.io/retrocketeer-api/${currentPage}.json`, { next: { validate: 60}});
            const res = await api.json();
            const {data} = res;
            setPosts(data);
            return  data;

            }
        catch (error) {
              console.error('Error fetching data:', error);
              throw error;
            }
  }

  

  useEffect(()=>{
    fetchApi(currentPage);
  }, [currentPage]);

  return (
    <div className="p-12">
    <main className="w-full bg-white p-12">
          <p className="mb-4 text-4xl font-bold text-gray-800">
            Recent posts
          </p>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
           {posts.map( post => (
            <Card key={post.id} post={post} handlePostViewed={handlePostViewed} />
           ))}
          </div>

          <div className="flex gap-5 align-center text-blue-300"> 
            <button onClick={ () => setCurrentPage('posts/1')}>Page 1</button>
            <button onClick={ () => setCurrentPage('posts/2')}>Page 2</button>
            <button onClick={ () => setCurrentPage('posts/3')}>Page 3</button>
          </div>

          <div className="">
            <RecentlyViewed  post={viewedPost} />
          </div>
    </main>
    </div>
  )
}