export const namespace = 'todos'

export type Todo = {
  text: string,
  id: number,
  completed: boolean
}

export type State = {
  all: Todo[],
  filter: boolean | undefined
}

export const initialState: State = {
  all: [
    {
      id: -1,
      text: 'Redux',
      completed: false
    }
  ],
  filter: undefined
}

export type OtherAction = { type: '' };
