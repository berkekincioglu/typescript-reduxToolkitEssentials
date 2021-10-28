import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { PostState, postUpdated } from './postsSlice';

interface ParamsType {
  postId: string;
}

const EditPostForm = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { postId } = useParams<ParamsType>();

  const post: PostState | any = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);
  const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>): void =>
    setContent(e.currentTarget.value);

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
