import React, { useContext } from 'react';

import HeaderDisplay from './display';
import { TodosContext } from '@contexts/todos';

export default function HeaderContainer() {
  const { add } = useContext(TodosContext);

  return <HeaderDisplay addTodo={add} />;
}
