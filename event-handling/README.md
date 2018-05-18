# React vs Ember: Event Handling

Since this is the first comparison in the series, I figured it'd be good to start with something that is ever present in nearly all components: Event Handling.

For the first demonstration of solving the same problem with both React and Ember, we will have a text box with an "on change" hook attached
such that any changes to the content of the text box will be represented in the component's
internal state via an action.

The goal of this comparison is to demonstrate the similarities between the two toolsets and what developer ergonomics each has to offer.

## React

```html
<iframe
  src="https://codesandbox.io/embed/github/NullVoxPopuli/react-vs-ember/tree/master/event-handling/react?module=%2Fsrc%2Fui%2Fmy-component.tsx"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
</iframe>
```

```tsx
import * as React from 'react';

export interface State { textProperty?: string; }
export interface Props {}

export default class MyComponent extends React.Component<Props, State> {
  // react stores all local state in a class property
  state: State = {};

  // actions in react must have a binding to the class instance otherwise
  // this.setState is undefined because `this` isn't the instance.
  // there are a couple ways around the error using .bind,
  // but this technique is the most concise.
  //
  // it works due to how class properties are transpiled --
  // by moving the definition inside the class constructor, which
  // auto-binds to the correct 'this'
  didChangeTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;

    // react uses setState for async-ily updating the state.
    // when the state is updated, a re-render of this and child components
    // wil occur.
    // note that setting any properties on the class itself will not cause a re-render.
    this.setState({ textProperty: text });
  }

  render() {
    const { textProperty } = this.state;

    return (
      <div>
        textProperty: {textProperty}<br />
        {/*
          in react, inputs must always have a set value if they are to be
          controlled by javascript code. in this case, since textProperty
          has no value, without the `|| ''`, the input would initially
          be uncontrolled, and switch to controlled upon the update of
          the value of textProperty.
          For more information on uncontrolled components: https://reactjs.org/docs/uncontrolled-components.html

          The onChange here is part of a built-in component provided as part of jsx
          https://reactjs.org/docs/forms.html#controlled-components
          it combines a few lower level dom events such as keyup and paste for convenience.
        */}
        <input
          value={textProperty || ''}
          onChange={this.didChangeTextField} />
      </div>
    );
  }
}
```

With many event handling functions, the component size can grow considerably.
It may be tempting to do inline change handling functions such as

```jsx
<input
  value={textProperty || ''}
  onChange={event => this.setState({ textProperty: event.target.value })} />
```

But it is best-practice to keep templates as simple as possible and pulling logic and functions out of them.


## Ember

Mimicking what was done for React (above), the following component creates an
event handling action.

```ts
import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class MyComponent extends Component {
  // in ember, component-level state is managed with class properties
  textProperty?: string;

  // an action in ember is a function that is intended to be be
  // used within templates.
  // the decorator here sets the function within an underlying `actions`
  // object on the component. It's within that `actions` object that
  // the templates know what actions are defined or not in order
  // to separate out helper function that may be present in a component.
  //
  // note that a class property function, like that used in the react
  // example above can also be used.
  // the only difference in the template would be that
  // (action 'didChangeTextField') becomes (action didChangeTextField)
  //
  // However, the reason actions in components are placed in an
  // actions object is because @ember/component has a fairly large
  // public api, and by idiomatically defining actions in the
  // actions object, it removes the change of naming collisions.
  // For example, if someone wanted to declare a destroy action as
  // destroy = () => { /* behavior */ }, that would break the
  // rendering process because the component couldn't be destroyed.
  //
  // for more information on the component:
  // api: https://www.emberjs.com/api/ember/release/classes/Component
  @action
  didChangeTextField(this: MyComponent, event: KeyboardEvent) {
    const text = (event.target as HTMLInputElement).value;

    this.set('textProperty', text);
  }
}
```

Because handlebars is a superset of html, (rather than its own markup/templating
language, like react),
ember provides [numerous template helpers](https://guides.emberjs.com/v3.1.0/templates/input-helpers/) for abstracting away menial
event-handling configuration (such as avoiding configuring keyup, paste, keydown, etc).

The key differences here from react is that the value attribute can
be just set to the property. and the `onChange` handler is a closure

For more information and a list of helpers: https://guides.emberjs.com/v3.1.0/templates/input-helpers/
```handlebars
{{input
  value=textProperty
  onChange=(action 'didChangeTextField')}}
```

Typically, in an ember project, you would only need an action handler for this kind of
event if you needed to do some pre-processing or logic on the value before eventually
setting the value to destined property.

If no processing needs to occur on the value, ember provides [action helpers](https://www.emberjs.com/api/ember/3.1/classes/Ember.Templates.helpers/methods/mut?anchor=mut):
```handlebars
{{input
  value=textProperty
  onChange=(action (mut textProperty)}}
```

Ember's templating provides good extensibility. As demonstrated by [DockYard's ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers) addon, additionaly composability can be achieved for simplifying menial tasks.

For example:
```handlebars
<button onclick={{action (mut count) (inc count)}}>
  Increment count
</button>
```


## Event Handling: Thoughts

Both React and Ember can achieve event handling in the same way. It may seem odd at first to have to follow convention
in ember's case with `@action` decorators (especially when they aren't needed), but ember's goal is different from react's.

As one can imagine, manually managing events for every single input in an app can feel tedious.
However, ember has a number of helpers to aid in the menial.. and, fortunately,
there are a number of tools / libraries (for both react and ember) that can assist with more complex things, such as forms -- but that'll
be a topic for another time.

--------------------------------------------------------

The application code for both the ember and react code above can be found [in this repository.](https://github.com/NullVoxPopuli/react-vs-ember/tree/master/event-handling)
For both ember and react apps, you should be able to get up and running, provided you have docker installed, by running `./run docker` (at least on unix-based machines)


--------------------------------------------------------

In order to try to stay focused, I made a lot of assumptions about the readers' knowledge.  
If you want to know more about anything mentioned in this post, feel free to tweet at me [@NullVoxPopuli](https://twitter.com/nullvoxpopuli).
Maybe:
 - why use typescript?
 - why are the typescript definitions different?
 - why does ember user separate template files?
   - why does ember use handlebars instead of jsx?
 - why not use redux for this example?
