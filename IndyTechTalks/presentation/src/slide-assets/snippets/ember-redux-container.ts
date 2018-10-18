// redux imports, etc
const stateToComputed = (state: State) => ({
  todos: list(state)
});

@connect(stateToComputed)
export default class TodoListComponent extends Component {}
