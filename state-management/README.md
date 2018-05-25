## React vs Ember: State Management


React: redux

https://redux.js.org/basics/usage-with-react

Ember: redux or services

By default, there is no need to configure the redux store. To start using redux in ember you only need a reducers/index.js file that `export default combineReducers({ reducersHere });`

But, the default top-level folders for redux are not maintainable, so we'll tweak how redux is configured like with react:

https://ember-redux.com/
