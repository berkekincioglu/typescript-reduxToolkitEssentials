import React from 'react';
import { useAppSelector } from '../../app/hooks';

interface Props {
  userId: string;
}

const PostAuthor = ({ userId }: Props) => {
  const author = useAppSelector((state) =>
    state.users.find((user) => user.id == userId)
  );

  return (
    <div>
      <span>{author && author.name}</span>
    </div>
  );
};

export default PostAuthor;
