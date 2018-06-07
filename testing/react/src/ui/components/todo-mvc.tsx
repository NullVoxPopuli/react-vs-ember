import * as React from 'react';

import Header from './header';
import Footer from './footer';
import TodoList from './todo-list';

export default class TodoMVC extends React.Component {
  render() {
    return (
      <div>
        <h1>todos</h1>

        <div className='todoapp'>
          <Header />

          <section className='main'>
            <input type='checkbox' className='toggle-all' value='on' />

              <TodoList />
          </section>

          <Footer />
        </div>
      </div>
    )
  }
}
