'use client'

import { useEffect, useState } from "react";
import Card from '@/components/Card';

export default function Home() {
  
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState('posts/1');


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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="">
            Recent posts
          </h1>
          <ul>
            {posts.map( post => (
              <Card post={post} />
            ))}
          </ul>

          <div className="flex gap-5 align-center text-blue-300"> 
            <button onClick={ () => setCurrentPage('posts/1')}>Page 1</button>
            <button onClick={ () => setCurrentPage('posts/2')}>Page 2</button>
            <button onClick={ () => setCurrentPage('posts/3')}>Page 3</button>
          </div>

          <div className="">
            <h2>
              Recently viewed
            </h2>
          </div>
    </main>
  )
}
