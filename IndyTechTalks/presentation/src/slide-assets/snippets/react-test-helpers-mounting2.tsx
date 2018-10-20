import createHistory from 'history/createMemoryHistory';
import { beforeEach } from '@bigtest/mocha';
import { setupAppForTesting, mount } from '@bigtest/react';

export function setupApplicationTest(initialState = {}, history = undefined) {
  beforeEach(async function() {
    const historyForTesting = history || createHistory();

    this.app = await setupAppForTesting(TestWrapper, {
      props: {
        initialState,
        history: historyForTesting
      },
    });
  });
}
