import { useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import TimeSlice from './TimeSlice';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeSlice timestamp={post.date} />
      </p>

      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
