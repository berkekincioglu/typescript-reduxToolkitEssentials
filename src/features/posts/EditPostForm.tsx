import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postUpdated } from './postsSlice';

const EditPostForm = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);
  const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>): void =>
    setContent(e.currentTarget.value);

  const { postId }: any = useParams();
  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  };

  return (
    <div>
      <section>
        <h2>Edit Post</h2>
        <form>
          <label htmlFor='postTitle'>Post Title:</label>
          <input
            type='text'
            id='postTitle'
            name='postTitle'
            placeholder="What's on your mind?"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor='postContent'>Content:</label>
          <textarea
            id='postContent'
            name='postContent'
            value={content}
            onChange={onContentChanged}
          />
        </form>
        <button type='button' onClick={onSavePostClicked}>
          Save Post
        </button>
      </section>
    </div>
  );
};

export default EditPostForm;
