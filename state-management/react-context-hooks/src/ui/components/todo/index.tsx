import React, { useContext } from "react";

import { TodosContext } from "@contexts/todos";
import TodoDisplay from "./display";

export interface IProps {
  todo: Todo;
}

export default function TodoContainer({ todo }: IProps) {
  const { destroy, edit, toggle } = useContext(TodosContext);

  return (
    <TodoDisplay
      {...{
        todo,
        destroyTodo: destroy,
        editTodo: edit,
        toggleCompletion: toggle
      }}
    />
  );
}
