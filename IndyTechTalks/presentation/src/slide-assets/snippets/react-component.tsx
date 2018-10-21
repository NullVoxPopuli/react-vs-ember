import * as React from 'react';

export default class ReactComponent extends React.Component {
  state = { baseNumber: 0, multiplier: 2 };

  get result() {
    return this.state.baseNumber * this.state.multiplier;
  }

  increment = () => this.setState({ baseNumber: this.state.baseNumber + 1 });
  decrement = () => this.setState({ baseNumber: this.state.baseNumber - 1 });

  changeMultiplier = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.currentTarget;

    this.setState({ multiplier: parseInt(element.value) });
  }

  // render() { ... }
}
