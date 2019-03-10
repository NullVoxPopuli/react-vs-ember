import * as React from 'react';

export interface State {
  text: string;
}

export interface Props {
  addTodo: (text: string) => void;
}

export default class HeaderDisplay extends React.Component<Props, State> {
  state = { text: '' };

  didChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    this.setState({ text });
  }

  didSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.text);

    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;

    return (
      <header className='header'>
        <form style={{marginBottom: 0}} onSubmit={this.didSubmit}>
          <input
            type='text'
            className='new-todo'
            placeholder='What needs to be done?'
            value={text || ''}
            onChange={this.didChange}
            autoFocus
          />

          <input style={{display: 'none'}} type='submit' value='submit' />
        </form>
      </header>
    );
  }
}
