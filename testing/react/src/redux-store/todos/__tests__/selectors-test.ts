import { expect } from 'chai';
import {
  all, active, completed,
  allCount, activeCount, completedCount
} from '../selectors';

describe('Unit | Redux | Todos | Selectors', () => {
  const makeTodo = (completed = false, id = 0, text = 'hi') => ({ id, text, completed });
  let state;

  beforeEach(() => {
    state = { todos: {
      all: [
        makeTodo(),
        makeTodo(),
        makeTodo(),
        makeTodo(true),
        makeTodo(true)
      ]
    }};
  });

  describe('all', () => {
    it('returns everything', () => {
      expect(all(state).length).to.eq(5);
    });
  });

  describe('active', () => {
    it('returns uncompleted todos', () => {
      expect(active(state).length).to.eq(3);
    });
  });

  describe('completed', () => {
    it('returns completed todos', () => {
      expect(completed(state).length).to.eq(2);
    });
  });

  describe('allCount', () => {
    it('returns the total number', () => {
      expect(allCount(state)).to.eq(5);
    });
  });

  describe('activeCount', () => {
    it('returns the total active', () => {
      expect(activeCount(state)).to.eq(3);
    });
  });

  describe('completedCount', () => {
    it('returns the total completed', () => {
      expect(completedCount(state)).to.eq(2);
    });
  });
});
