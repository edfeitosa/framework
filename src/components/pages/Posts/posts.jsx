import React, { useState, useEffect } from 'react';

import appService from '../../../services/appService';

const Posts = () => {

  const [posts, setPosts] = useState();

  async function loadData() {
    const response = await appService.getClients('posts');
    setPosts(response);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Posts</h1>
    </>
  );
}

export default Posts;