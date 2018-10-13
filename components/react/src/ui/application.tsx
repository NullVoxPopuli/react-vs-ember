import * as React from 'react';

import ReactComponent from './components/react-component';

export default class Application extends React.Component {
  render() {
    return (
      <div>
        React Component <br />
        <ReactComponent />
      </div>
    );
  }
}
