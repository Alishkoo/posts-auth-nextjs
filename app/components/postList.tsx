'use client';

import React, { useContext, useState } from 'react';
import {Post, PostsContext, usePosts} from '../context/posts';
import PostItem from './postItem';

const PostList : React.FC = () => {

  const {posts, setPosts} = usePosts();


	return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;