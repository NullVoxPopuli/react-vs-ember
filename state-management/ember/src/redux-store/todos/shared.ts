export const namespace = 'todos'

export type Todo = {
  text: string,
  id: number,
  completed: boolean
}

export type State = {
  todos: Todo[]
}

export const initialState: State = {
  todos: []
}

export type OtherAction = { type: '' };
