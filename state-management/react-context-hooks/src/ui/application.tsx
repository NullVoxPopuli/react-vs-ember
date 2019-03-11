import React, { useReducer, Reducer } from "react";
import uuid from "uuid";
import { TodosContext, ITodos, defaultValue } from "@contexts/todos";

import TodoMVC from "./components/todo-mvc";

import "./styles/app.scss";

const CLEAR_COMPLETED = "clear-compuleted";
const COMPLETE = "complete";
const DESTROY = "destroy";
const ADD = "add";
const EDIT = "edit";
const TOGGLE = "toggle";
const SET_FILTER = "set-filter";
const OTHER = undefined;

const actions = {
  [CLEAR_COMPLETED](state) {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.completed === false)
    };
  },
  [COMPLETE](state, { id }) {
    return {
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }

        return todo;
      })
    };
  },
  [ADD](state, { text }) {
    return {
      ...state,
      todos: [...state.todos, { text, id: uuid(), completed: false }]
    };
  },
  [DESTROY](state, { id }) {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    };
  },
  [EDIT](state, { id, text }) {
    return {
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, text };
        }

        return todo;
      })
    };
  },
  [TOGGLE](state, { id }) {
    return {
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    };
  },
  [SET_FILTER](state, { value }) {
    return {
      ...state,
      showCompletedFilter: value
    };
  },
  [OTHER]: (state, action) => state,
};

function reducer(state, action) {
  return actions[action.type](state, action);
}

function TodosProvider({ children }) {
  const [state, dispatch] = useReducer<Reducer<ITodos, any>>(reducer, {
    ...defaultValue,
    todos: [
      {
        id: uuid(),
        text: "Todo from context",
        completed: false
      }
    ]
  });

  return (
    <TodosContext.Provider
      value={{
        ...state,
        add: (text: string) => dispatch({ type: ADD, text }),
        clearCompleted: () => dispatch({ type: CLEAR_COMPLETED }),
        complete: (id: number) => dispatch({ type: COMPLETE, id }),
        destroy: (id: number) => dispatch({ type: DESTROY, id }),
        edit: (id: number, text: string) => dispatch({ type: EDIT, id, text }),
        showAll: () => dispatch({ type: SET_FILTER, value: undefined }),
        showActive: () => dispatch({ type: SET_FILTER, value: false }),
        showCompleted: () => dispatch({ type: SET_FILTER, value: true }),
        toggle: (id: number) => dispatch({ type: TOGGLE, id })
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default function Application() {
  return (
    <TodosProvider>
      <TodoMVC />
    </TodosProvider>
  );
}
