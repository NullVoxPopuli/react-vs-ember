import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('todo', {
  sequences: {
    id: num => num
  },
  default: {
    id: FactoryGuy.generate('id'),
    completed: false,
    text: f => `Some todo - #${f.id}`
  },
  traits: {
    completed: { completed: true }
  }
});
