## React vs Ember: State Management

React: redux

https://redux.js.org/basics/usage-with-react

Ember: redux or services

By default, there is no need to configure the redux store. To start using redux in ember you only need a reducers/index.js file that `export default combineReducers({ reducersHere });`

But, the default top-level folders for redux are not maintainable, so we'll tweak how redux is configured like with react:

https://ember-redux.com/


Redux Performance

Ouch: https://github.com/redux-saga/redux-saga/issues/241#issuecomment-207202589


https://github.com/reduxjs/redux/issues/768
https://github.com/reduxjs/redux/issues/1303
https://github.com/reduxjs/redux/issues/1783
https://github.com/markerikson/react-redux-links/blob/master/react-performance.md
https://somebody32.github.io/high-performance-redux/
