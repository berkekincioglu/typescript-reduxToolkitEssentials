import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { RouteComponentProps } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import { StyleSheet } from '../../utils/StyleSheet';
import styled, { createGlobalStyle, css } from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  cursor: pointer;
`;

const SinglePostPage = ({ match }: RouteComponentProps) => {
  const { postId }: any = useParams();
  // const { postId }: any = match.params;
  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  return (
    <div>
      {post ? (
        <section>
          <article>
            <h2>{post.title}</h2>
            <p className='post-content'>{post.content}</p>
          </article>
          <Link to='/'>
            <Button>Back</Button>
          </Link>
        </section>
      ) : (
        <p>Post is not found</p>
      )}
    </div>
  );
};

// const styles = StyleSheet.create({
//   link: {
//     padding: '5px 20px',
//     backgroundColor: '#777',
//     color: '#fff',
//     borderRadius: '30px',
//     marginTop: '20px',
//     display: 'inline-block',
//     border: 'solid 2px #cccccc',
//     hover: {
//       backgroundColor: '#fff',
//     },
//   },
// });

export default SinglePostPage;
