import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { StyleSheet } from '../../utils/StyleSheet';
import PostAuthor from './PostAuthor';
import { postsSelector } from './postsSlice';
import ReactionButton from './ReactionButton';
import TimeAgo from './TimeAgo';

const PostsList = () => {
  const posts = useAppSelector(postsSelector);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => {
    return (
      <article
        key={post.id}
        style={{ ...styles.postStyle, ...styles.container }}
      >
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <h6>{post.id}</h6>
        <PostAuthor userId={post.user} />
        <TimeAgo timeStamp={post.date} />
        <Link to={`/posts/${post.id}`}>View Post</Link>
        <ReactionButton post={post} />
      </article>
    );
  });

  return (
    <div>
      <h2 style={{ ...styles.title, ...styles.container }}>Posts</h2>
      {renderedPosts}
    </div>
  );
};

const styles = StyleSheet.create({
  postStyle: {
    margin: '30px',
    padding: '15px 0',
    width: '90vw',
    flex: 1,
    border: '2px solid black',
    flexDirection: 'column',
    borderRadius: '30px',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostsList;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
