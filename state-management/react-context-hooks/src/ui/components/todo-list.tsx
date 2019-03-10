import React, { useContext } from "react";

import { list, TodosContext } from "@contexts/todos";
import TodoItem from "@ui/components/todo";

export default function TodoList() {
  const { todos, showCompletedFilter } = useContext(TodosContext);

  return (
    <ul className="todo-list">
      {list(todos, showCompletedFilter).map(t => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ul>
  );
}
