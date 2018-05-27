import Ember from 'ember';

const { get, computed } = Ember;

export default Ember.Component.extend({
  tagName: 'span',
  classNames: 'todo-count',
  itemWord: computed('todosCount', function() {
    let count = get(this, 'todosCount');
    return count > 1 ? 'items' : 'item';
  })
});
