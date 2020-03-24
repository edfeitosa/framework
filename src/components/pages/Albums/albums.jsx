import React, { useState, useEffect } from 'react';

import appService from '../../../services/appService';
import List from '../../molecules/List/list';

const Albums = () => {

  const [albums, setAlbums] = useState();

  async function loadData() {
    const response = await appService.getClients('albums');
    setAlbums(response);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Albums</h1>
      {
        albums && albums.map((itens, key) => (
          <List key={key} rows={itens} />
        ))
      }
    </>
  );
}

export default Albums;