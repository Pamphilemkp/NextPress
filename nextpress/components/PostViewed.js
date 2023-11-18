

const PostViewed = (post) => {
    

    return (
        <li key={post.id}>
            <p>
                <span>{post.id}</span>
                 {' '}
                <span>{post.title}</span>
            </p>
        </li>
         );
};

export default PostViewed;