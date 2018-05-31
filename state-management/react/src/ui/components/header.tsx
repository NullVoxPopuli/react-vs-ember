import * as React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <form>
          <input
            type='text'
            className='new-todo'
            placeholder='What needs to be done?'
            autoFocus
          />

          <input style={{display: 'none'}} type='submit' value='submit' />
        </form>
      </header>
    );
  }
}
