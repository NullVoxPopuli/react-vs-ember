## React vs Ember: State Management

_This is the second post in a segmented series on react (and react's ecosystem) vs ember. To read the previous, [go here to read about Event Handling](http://todo-add-link-here).  The *Event Handling* post is not required reading for this post, but makes the same general assumptions about prior knowledge apply. [See the series intro here](http://todo-add-link-to-intro-here)._

This post will demonstrate two different ways of managing application state: With and without redux.
Because redux is _just_ javascript, there are negligible differences between the react and ember worlds. As shown [in the repo folder for this blog post](https://github.com/NullVoxPopuli/react-vs-ember/tree/master/state-management), the react and ember redux implementations use the _exact_ same `redux-store` folder.


Something something about application state, and why state management something something


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

### Usage in React

Without a container

```tsx
// src/ui/components/todo-list.tsx
// imports omitted, see
// https://github.com/NullVoxPopuli/react-vs-ember/blob/master/state-management/react/src/ui/components/todo-list.tsx

const mapStateToProps = (state: State) => ({
  todos: list(state)
});

@connect(mapStateToProps)
export default class TodoList extends React.Component<Props> {
  render() {
    const { todos } = this.props;

    return (
      <ul className='todo-list'>
        {todos.map((t, i) => <TodoItem key={i} todo={t} />)}
      </ul>
    );
  }
}
```

With a container

```tsx
// src/ui/components/todo/index.tsx
// https://github.com/NullVoxPopuli/react-vs-ember/blob/master/state-management/react/src/ui/components/todo/index.tsx
import * as React from 'react';
import { connect } from 'react-redux';

import { edit, destroy, toggle } from '@store/todos';

import TodoDisplay from './display';

const mapDispatchToProps = (dispatch) => ({
  destroyTodo: (id: number) => dispatch(destroy(id)),
  toggleCompletion: (id: number) => dispatch(toggle(id)),
  editTodo: (id: number, text: string) => dispatch(edit(id, text))
});

export default connect(null, mapDispatchToProps)(TodoDisplay);
```
```tsx
// src/ui/components/todo/display.tsx
// file heavily abbreviated
// see: https://github.com/NullVoxPopuli/react-vs-ember/blob/master/state-management/react/src/ui/components/todo/display.tsx

export default class TodoDisplay extends React.Component<Props, State> {
  state = { editing: false };

  didFinishEditing = (e:  React.FocusEvent<HTMLInputElement>) => {
    const { editTodo, todo: { id } } = this.props;

    const text = e.target.value;

    editTodo(id, text);
    this.setState({ editing: false });
  }

  didDoubleClickLabel = () => {
    this.setState({ editing: true });
  }

  // ... other action handlers ...

  render() {
    // actions retrieved from props from the container
    const { todo, destroyTodo, toggleCompletion } = this.props;

    // ... template omitted
  }
}

```


### Usage in Ember

Without a container
```ts
// src/ui/components/todo-list/component.ts
// imports omitted
// see: https://github.com/NullVoxPopuli/react-vs-ember/blob/master/state-management/ember-redux/src/ui/components/todo-list/component.ts
@connect(stateToComputed)
export default class TodoListComponent extends Component {
  tagName = 'ul';
  classNames = ['todo-list'];
}

```
```hbs
{{!--
src/ui/components/todo-list/template.hbs
https://github.com/NullVoxPopuli/react-vs-ember/blob/master/state-management/ember-redux/src/ui/components/todo-list/template.hbs
--}}
{{#each todos as |todo|}}

  <TodoItem @todo={{todo}} />

{{/each}}
```

With a container

```ts
// src/ui/components/todo-item/component.ts
// imports omitted
// see: https://github.com/NullVoxPopuli/react-vs-ember/blob/master/state-management/ember-redux/src/ui/components/todo-item/component.ts

import Component from '@ember/component';
import { action } from '@ember-decorators/object';

import { connect } from 'ember-redux';
import { edit, destroy, toggle } from 'example-app/src/redux-store/todos';

const dispatchToActions = {
  deleteTodo: destroy,
  completeTodo: toggle,
  editTodo: edit
}

@connect(null, dispatchToActions)
export default class TodoItemContainer extends Component {
  tagName = 'li';
  editing = false;
  classNameBindings = ['todo.completed', 'editing'];

  @action
  startEditing(this: TodoItemContainer) {
    this.set('editing', true);
  }

  @action
  doneEditing(this: TodoItemContainer) {
    this.set('editing', false);
  }
}
```
```hbs
{{!--
  src/ui/components/todo-item/template.hbs
  see: https://github.com/NullVoxPopuli/react-vs-ember/blob/master/state-management/ember-redux/src/ui/components/todo-item/template.hbs
  --}}
<TodoDisplay
  @todo={{todo}}
  @props={{hash
    deleteTodo=(action "deleteTodo" todo.id)
    completeTodo=(action "completeTodo" todo.id)
    editTodo=(action "editTodo" todo.id)
    startEditing=(action "startEditing")
    doneEditing=(action "doneEditing")
  }}
/>
```

```ts
{{!--
  src/ui/components/todo-item/display/component.ts
  see: https://github.com/NullVoxPopuli/react-vs-ember/blob/master/state-management/ember-redux/src/ui/components/todo-item/display/component.ts
  --}}
export default class TodoItemDisplay extends Component {

  @action
  didClickLabel() {
    this.props.startEditing();
    this.send('focusInput');
  }

  @action
  didFinishEditing(e: KeyboardEvent) {
    const target = (e.target as HTMLInputElement);
    const text = target.value;

    this.props.editTodo(text);
    this.props.doneEditing();
  }
}
```



## Without Redux (Ember Only)

With React, due it only being a view library, without a provided way to manage messages between components, redux is nearly a requirement for application-level state.

## State Management: Final Thoughts

Redux isn't required.
Using redux doesn't mean that other state-management should be avoided.

[Not everything needs to be in redux](https://redux.js.org/faq/organizing-state#organizing-state)



React: redux

https://redux.js.org/basics/usage-with-react

https://ember-redux.com/


Redux Performance

Ouch: https://github.com/redux-saga/redux-saga/issues/241#issuecomment-207202589


https://github.com/reduxjs/redux/issues/768
https://github.com/reduxjs/redux/issues/1303
https://github.com/reduxjs/redux/issues/1783
https://github.com/markerikson/react-redux-links/blob/master/react-performance.md
https://somebody32.github.io/high-performance-redux/
