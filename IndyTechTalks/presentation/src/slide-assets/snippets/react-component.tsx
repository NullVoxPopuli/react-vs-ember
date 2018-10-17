import * as React from 'react';

export default class ReactComponent extends React.Component {
  state = { clickCount: 0, multiplier: 2 };

  get double() {
    return this.state.clickCount * this.state.multiplier;
  }

  increment = () => this.setState({ clickCount: this.state.clickCount + 1 });
  decrement = () => this.setState({ clickCount: this.state.clickCount - 1 });

  changeMultiplier = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.currentTarget;

    this.setState({ multiplier: parseInt(element.value) });
  }

  // render() { ... }
}
