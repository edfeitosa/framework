import React, { useState, useEffect } from 'react';

import appService from '../../../services/appService';
import List from '../../molecules/List/list';

const ListedItens = ({rows}) => <List rows={rows} />;

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
      {
        posts && posts.map((itens, key) => (
          <List key={key} rows={itens} />
        ))
      }
    </>
  );
}

export default Posts;