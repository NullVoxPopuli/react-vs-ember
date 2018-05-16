
# React vs Ember: Event Handling

For the first comparison, we will have a text box with an "on change" hook attached,
such that any changes to the content of the text box will be represented in the component's
internal state via an action.


TODO: flesh out, add details
- two ways to handle events in ember, depending on the situation
- one way in react

## React

```html
<iframe
  src="https://codesandbox.io/embed/github/NullVoxPopuli/react-vs-ember/tree/master/event-handling/react?module=%2Fsrc%2Fui%2Fmy-component.tsx"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
</iframe>
```



## Ember

Mimicking what was done for React (above), the following component creates an
event handling action.

```ts
import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class MyComponent extends Component {
  textProperty?: string;

  @action
  didChangeTextField(this: MyComponent, event) {
    const text = event.target.value;

    this.set('textProperty', text);
  }
}
```
```hbs
{{input
  value=textProperty
  onChange=(action 'didChangeTextField')}}
```

Typically, in an ember project, you would only _need_ an action handler for this kind of
event if you needed to do some sort of pre-processing or logic on the value before eventually
setting the value to a property.

If no processing needs to occur on the value, ember provides [closure actions](https://www.emberjs.com/api/ember/3.1/classes/Ember.Templates.helpers/methods/mut?anchor=mut):
```hbs
{{input
  value=textProperty
  onChange=(action (mut textProperty)}}
```

Ember's templating provides good extensibility. As demonstrated by [DockYard's ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers) addon, additionaly composability can be achieved for simplifying menial tasks.

For example:
```hbs
<button onclick={{action (mut count) (inc count)}}>
  Increment count
</button>
```


A similar technique could be done in react, by doing an inline-onChange handler:

```jsx
<input
  value={textProperty || ''}
  onChange={event => this.setState({ textProperty: event.target.value })} />
```
