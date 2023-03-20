import React from 'react';
import { useSelector } from 'react-redux';

const PostAuthor = (props) => {
  const users = useSelector((state) => state.users);

  const author = users.find((user) => user.id === props.userId);
  return <span> By {author ? author.name : 'Unknown Author'}</span>;
};

export default PostAuthor;
