import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import TodoList from './todo-list';

import IndexRoute from '@ui/routes/index';
import ActiveRoute from '@ui/routes/active';
import CompletedRoute from '@ui/routes/completed';

export default class TodoMVC extends React.Component {
  render() {
    return (
      <div data-test-todo-mvc>
        <h1 data-test-page-header>todos</h1>

        <div className='todoapp'>
          <Header />

          <section className='main'>
            {/* <Switch> */}
              <Route exact path='/' component={IndexRoute} />
              <Route exact path='/active' component={ActiveRoute} />
              <Route exact path='/completed' component={CompletedRoute} />
            {/* </Switch> */}
          </section>

          <Footer />
        </div>
      </div>
    );
  }
}
