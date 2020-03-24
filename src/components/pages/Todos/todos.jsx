import React, { useState, useEffect } from 'react';

import appService from '../../../services/appService';
import List from '../../molecules/List/list';

const Todos = () => {

  const [todos, setTodos] = useState();

  async function loadData() {
    const response = await appService.getClients('todos');
    setTodos(response);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Todos</h1>
      {
        todos && todos.map((itens, key) => (
          <List key={key} rows={itens} />
        ))
      }
    </>
  );
}

export default Todos;