import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {
  onClick: () => void;
  isRunning: boolean;
  clickCount: number;
  lastCoords: string;
}

export default class AsyncButton extends React.Component<IProps> {
  render() {
    const { onClick, isRunning, clickCount, lastCoords } = this.props;

    return (
      <>
        <button onClick={onClick} disabled={isRunning}>
          Async Button: {clickCount} times clicked
        </button>

        { isRunning && 'Running...' }

        <br />Last click coordinates: {lastCoords}
      </>
    )
  }
}

