export default class Application extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      todos: [], clearCompleted: this.clearCompleted, /* etc */
    }
  }

  clearCompleted = () => {
    const todos = this.state.todos.filter(t => !t.completed);
    this.setState({ todos });
  }

  render = () => (
    <TodosContext.Provider value={this.state}>
      <TodoMVC />
    </TodosContext.Provider>
  );
}
