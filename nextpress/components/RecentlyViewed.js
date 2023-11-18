'use client'

import {useEffect, useState} from 'react';
import PostViewed from '@/components/PostViewed';

const RecentlyViewed = (post) => {

   const [recentViewed, setRecentViewed] = useState([]);

   if(!recentViewed.some((viewedPost) => viewedPost.id === post.id)){
    const updatedPosts = [post, ...viewedPost];
    setRecentViewed(updatedPosts);
   };

   useEffect(()=>{

    localStorage.setItem('recentlyViewed', JSON.stringify(updatedPosts));
   }, [recentViewed])

   // getting the posts and show them
   const StoredPost = localStorage.getItem(JSON.parse('recentlyViewed'));
   
    return (
        <div>
            Recently Viewed Posts

            <ul>
                {StoredPost.map((postStored) => {
                        <PostViewed postStored={postStored} />
                })}
            </ul>

        </div>
    )
}
export default RecentlyViewed;