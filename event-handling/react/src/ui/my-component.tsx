import * as React from 'react';

export interface State {
  textProperty?: string;
}

export interface Props {}

export default class MyComponent extends React.Component<Props, State> {
  state: State = {};

  didChangeTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;

    this.setState({ textProperty: text });
  }

  render() {
    const { textProperty } = this.state;

    return (
      <div>
        textProperty: {textProperty}<br />
        <input 
          value={textProperty || ''} 
          onChange={this.didChangeTextField} />
      </div>
    );
  }
}
