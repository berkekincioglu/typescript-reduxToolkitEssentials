import React from 'react';
import { useAppDispatch } from '../../app/hooks';

import { PostState, reactionAdded } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

const ReactionButton = ({ post }: PostState | any) => {
  const dispatch = useAppDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji}
        <span style={{ margin: '0 20px' }}>{post.reactions[name]}</span>
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButton;
