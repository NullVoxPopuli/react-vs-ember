import { expect } from 'chai';
import { initialState } from '../shared';
import {
  reducer,
  add, toggle, clearCompleted,
  complete, destroy, edit
} from '../index';

describe('Unit | Redux | Todos | Actions', () => {
  const emptyState = { all: [] };

  it('returns the initial state', () => {
    const result = reducer(undefined, { type: undefined });

    expect(result).to.equal(initialState);
  });

  describe('add', () => {
    it('inserts new', () => {
      const result = reducer(emptyState, add('new todo'));
      const todos = result.all;

      expect(todos.length).to.equal(1);
      expect(todos[0].text).to.equal('new todo');
    });

    it('appends', () => {
      const preResult = reducer(emptyState, add('new todo'));
      const result = reducer(preResult, add('second todo'));
      const todos = result.all;

      expect(todos.length).to.equal(2);
      expect(todos[0].text).to.equal('new todo');
      expect(todos[1].text).to.equal('second todo');
    });
  });

  it('handles clear-comploted', () => {
    const state = { all: [
      { id: 0, text: '', completed: false },
      { id: 1, text: '', completed: false },
      { id: 2, text: '', completed: true }
    ]};

    const result = reducer(state, clearCompleted());
    const todos = result.all;

    expect(todos.length).to.eq(2);
    expect(todos.filter(t => t.completed).length).to.eq(0);
  });

  it('handles complete', () => {
    const targetId = 0
    const state = { all: [
      { id: targetId, text: '', completed: false },
      { id: 1, text: '', completed: false }
    ]};

    const result = reducer(state, complete(targetId));
    const todos = result.all;

    expect(todos.find(t => t.id === targetId).completed).to.be.true;
    expect(todos.filter(t => t.completed).length).to.eq(1);
  });

  it('handles destroy', () => {
    const targetId = 0
    const state = { all: [
      { id: targetId, text: '', completed: false },
      { id: 1, text: '', completed: false }
    ]};

    const result = reducer(state, destroy(targetId));
    const todos = result.all;

    expect(todos.length).to.eq(1);
    expect(todos.find(t => t.id === targetId)).to.eq(undefined);
  });

  it('handles edit', () => {
    const targetId = 0
    const state = { all: [
      { id: targetId, text: '', completed: false },
      { id: 1, text: '', completed: false }
    ]};

    const result = reducer(state, edit(targetId, 'new text'));
    const todos = result.all;

    expect(todos.find(t => t.id === targetId).text).to.eq('new text');
  });

  it('handles toggle', () => {
    const targetId = 0
    const state = { all: [
      { id: targetId, text: '', completed: false },
      { id: 1, text: '', completed: false }
    ]};

    const result = reducer(state, destroy(targetId));
    const todos = result.all;

    expect(todos.length).to.eq(1);
    expect(todos.find(t => t.id === targetId)).to.eq(undefined)
  });

});
