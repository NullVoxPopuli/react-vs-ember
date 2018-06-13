import { find, click, fillIn, blur } from '@ember/test-helpers';

const scope = '[data-test-todo]:first-child';
const label = '[data-test-todo-label]';
const input = '[data-test-todo-edit]';

export default {
  element: () => find(scope),
  label: () => find(`${scope} ${label}`),
  click: () => click(`${scope} ${label}`),
  fill: (text: string) => fillIn(`${scope} ${input}`, text),
  blur: () => blur(`${scope} ${input}`),
  toggle: () => click(`${scope} [data-test-todo-completion-toggle]`),
  isEditing: () => find(scope).classList.contains('editing')
}
