
'use client'

import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import RecentlyViewed from "@/components/RecentlyViewed";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [viewedPost, setViewedPost] = useState(null);

  const handlePostViewed = (clickedPost) => {
    setViewedPost(clickedPost);
  };

  const fetchApi = async (page) => {
    try {
      const api = await fetch(`https://retrocket.github.io/retrocketeer-api/posts/${page}.json`, { next: { validate: 60 } });
      const res = await api.json();
      const { data } = res;
      setPosts(data);

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchApi(currentPage);
  }, [currentPage]);

  return (
    <div className="p-5 md:p-12">
      <main className="w-full bg-white p-4 sm:p-12">
        <p className="mb-4 text-4xl font-bold text-gray-800">Recent posts</p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card key={post.id} post={post} handlePostViewed={handlePostViewed} />
            ))
          ) : 
          (
            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
              <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                  <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                  <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="24"></line>
                  <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                  </line>
                  <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="24"></line>
                  <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                  </line>
                  <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="24"></line>
                  <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                  <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                  </line>
              </svg>
              <span className="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
          )}
          
        </div>

        <div className=" flex space-x-1 text-blue-300 p-2 my-5">
          <p className="font-bold text-lg">Pages ... </p>
          {[1, 2, 3].map((page) => (
            page === currentPage ?
            (<button key={page} onClick={() => handlePageChange(page)}  className=" bg-red-500 text-white p-2 inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400">
              {page}
            </button>)
             :
            (<button key={page} onClick={() => handlePageChange(page)}  className="hover:bg-violet-400 hover:text-gray-900 p-2 inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400">
            {page}
          </button>)
          ))}
        </div>

        <div className="">
          <RecentlyViewed post={viewedPost} />
        </div>
      </main>
    </div>
  );
}
