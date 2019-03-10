import React, { useContext } from "react";

import { TodosContext, allCount, count, completedCount } from "@contexts/todos";

import FooterDisplay from "./display";

export default function FooterContainer() {
  const {
    todos,
    showCompletedFilter,
    clearCompleted,
    showAll,
    showActive,
    showCompleted
  } = useContext(TodosContext);

  return (
    <FooterDisplay
      {...{
        clearCompleted,
        showAll,
        showActive,
        showCompleted,
        filter: showCompletedFilter,
        allCount: allCount(todos),
        todosCount: count(todos, showCompletedFilter),
        completedCount: completedCount(todos)
      }}
    />
  );
}
