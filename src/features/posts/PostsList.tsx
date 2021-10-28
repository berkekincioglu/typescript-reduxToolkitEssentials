import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { StyleSheet } from '../../utils/StyleSheet';
import { postsSelector } from './postsSlice';

const PostsList = () => {
  const posts = useAppSelector(postsSelector);
  const users = useAppSelector((state) => state.users);

  const renderedPosts = posts.map((post) => {
    const user = users.find((user) => user.id === post.user);
    console.log(user);
    return (
      <article
        key={post.id}
        style={{ ...styles.postStyle, ...styles.container }}
      >
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <h6>{post.id}</h6>
        <h2>{user && user.name}</h2>
        <Link to={`/posts/${post.id}`}>View Post</Link>
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
