import * as React from 'react';
import { compose } from 'recompose';
import { withPerson, withLoader } from '@data/somewhere';

class StarWarsPerson extends React.Component {
  render() {
    const { person } = this.props;

    return <h1>{person.name}</h1>
  }
}

export default compose(
  withPerson(1),
  withLoader(({ person }) => person)
(StarWarsPerson)
