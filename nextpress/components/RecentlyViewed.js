import { useEffect, useState } from 'react';
import PostViewed from '@/components/PostViewed';

const RecentlyViewed = ({ post }) => {

// here before accessing localStorage to avoid the SSR reference error i checked if the code is availableon client side when i fetch
  const isBrowser = typeof window !== 'undefined';

 // then if available i return the value in local storage else i return an empty array
 // the last condition is when the localstorage is null or undefined return an empty array else return what is in the storage

  const [recentViewed, setRecentViewed] = useState(
    isBrowser ? JSON.parse(localStorage.getItem('recentlyViewed')) || [] : []
  );
  const [storedPost, setStoredPost] = useState([]);

  useEffect(() => {
    if (isBrowser) {
      if (post && !recentViewed.some((viewedPost) => viewedPost.id === post.id)) {
        const updatedPosts = [post, ...recentViewed];
        setRecentViewed(updatedPosts);
        localStorage.setItem('recentlyViewed', JSON.stringify(updatedPosts));
      }
    }
  }, [post, recentViewed, isBrowser]);

  useEffect(() => {
    setStoredPost(recentViewed);
  }, [recentViewed]);

  return (
    <div>
      <p className="mb-4 text-4xl font-bold text-gray-800">Recently Viewed Posts</p>

      <ul>
        {storedPost.map((postStored) => (
          <PostViewed key={postStored.id} post={postStored} />
        ))}
      </ul>
    </div>
  );
};

export default RecentlyViewed;
