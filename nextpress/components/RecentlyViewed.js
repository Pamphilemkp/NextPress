'use client'

import {useEffect, useState} from 'react';
import PostViewed from '@/components/PostViewed';

const RecentlyViewed = ({post}) => {

   const [recentViewed, setRecentViewed] = useState([]);
   const [StoredPost, setStoredPost] = useState([]);

   if (post) {
        if (!recentViewed.some((viewedPost) => viewedPost.id === post.id)) {
        const updatedPosts = [post, ...recentViewed];
        setRecentViewed(updatedPosts);
        }

        
        localStorage.setItem('recentlyViewed', JSON.stringify(recentViewed));
    }

  

//    useEffect(()=>{

//     localStorage.setItem('recentlyViewed', JSON.stringify(recentViewed));
//    }, [recentViewed])




//    let StoredPost = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

      useEffect(() => {
        // setStoredPost(JSON.parse(localStorage.getItem('recentlyViewed')));
        const a = JSON.parse(localStorage.getItem('recentlyViewed'));
        setStoredPost(a);
      }, [])
      
      console.log(StoredPost)
   
    return (
        <div>
            Recently Viewed Posts

            <ul>
                {StoredPost.map((postStored) => (
                    <PostViewed key={postStored.id} post={postStored} />
                ))}
            </ul>

        </div>
    )
}
export default RecentlyViewed;