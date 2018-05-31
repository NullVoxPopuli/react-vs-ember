## React vs Ember: State Management

_This is the second post in a segmented series on react (and react's ecosystem) vs ember. To read the previous, [go here to read about Event Handling](http://todo-add-link-here).  The *Event Handling* post is not required reading for this post, but makes the same general assumptions about prior knowledge apply. [See the series intro here](http://todo-add-link-to-intro-here)._

This post will demonstrate two different ways of managing application state: With and without redux.
Because redux is _just_ javascript, there are negligible differences between the react and ember worlds. As shown [in the repo folder for this blog post](https://github.com/NullVoxPopuli/react-vs-ember/tree/master/state-management), the react and ember redux implementations use the _exact_ same `redux-store` folder.


## Redux (Both React and Ember)

### The custom redux layout

Officially, [redux](https://redux.js.org) has [no opinion](https://redux.js.org/faq/code-structure) on code structure. The most commonly seen is the 'rails style' where there is an 'actions' folder, 'reducers' folder, etc. and your features are spread out via 'types' of folders. While this pattern may be easy to implement (i.e.: low effort), it is not suitable for maintainability and discovery.


The following structure is the 'ducks' structure mentioned in the redux docs -- it's really a feature-based domain-concept structure.
To see implementation details, specifically managing imports and (re)exports, the code is available for browsing [here on github](https://github.com/NullVoxPopuli/react-vs-ember/tree/master/state-management/ember-redux/src/redux-store).

```bash
redux-store/
│
│   # re-exports the main things for public-api and redux-store creation
├── index.ts
│   # devtools setup
├── enhancers.ts
│   # setup sagas, thunks, logging, etc
├── middleware.ts
│   # all reducers combined here
│   # this is the only place where combineReducers is called,
│   # and this defines the top level 'State' type
├── reducers.ts
│
│   # a domain concept
└── todos/
    │
    │   # re-exports the public api things (action creators, the reducer).
    │   # also defines the 'ActionTypes' type which constrains the
    │   # reducer for todos to a fixed set of types for each possible action
    │   # available on the todos 'namespace'
    ├── index.ts
    │   # selectors are helper functions for retrieving data out of the global
    │   # redux state. these should be pure functions, just like the reducers.
    ├── selectors.ts
    │   # defines the domain concept namespace, types and initial state.
    ├── shared.ts
    │
    └── actions/
        │
        │   # Each action contains everything that is needed for
        │   # a particular behavior.
        │   # - action type constant
        │   # - action creator
        │   # - reducer
        │   # - sagas (if being used)
        ├── add.ts
        ├── clear-completed.ts
        ├── complete.ts
        ├── destroy.ts
        ├── edit.ts
            ... etc
```

### Containers

Containers are



## Without Redux (Ember Only)



## State Management: Final Thoughts

Redux isn't required.
Using redux doesn't mean that other state-management should be avoided.

[Not everything needs to be in redux](https://redux.js.org/faq/organizing-state#organizing-state)



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
