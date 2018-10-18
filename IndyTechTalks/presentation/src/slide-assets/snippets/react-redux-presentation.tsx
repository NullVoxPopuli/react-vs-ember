export default class extends React.PureComponent<Props> {
  render() {
    return (
      <ul className='todo-list'>
        {this.props.todos.map((t, i) => <TodoItem key={i} todo={t} />)}
      </ul>
    );
  }
}
