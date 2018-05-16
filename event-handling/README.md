
# React vs Ember: Event Handling

TODO: flesh out, add details
- two ways to handle events in ember, depending on the situation
- one way in react

In React:

```html
<iframe
  src="https://codesandbox.io/embed/github/NullVoxPopuli/react-vs-ember/tree/master/event-handling/react?module=%2Fsrc%2Fui%2Fmy-component.tsx" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
</iframe>
```

In Ember: first, an action handler, for if you need to do any sort of processing on the input.

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
{{input value=textProperty onChange=(action 'didChangeTextField')}}
```

If no processing needs to occur on the value
```ts
import Component from '@ember/component';

export default class MyComponent extends Component {}
```
```hbs
{{input value=textProperty onChange=(action (mut textProperty)}}
```

Closure Actions
