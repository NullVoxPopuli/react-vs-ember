import { setupAppForTesting } from '@bigtest/react';

import Application from '@ui/application';

export function setupApplicationTest() {
  beforeEach(async function() {
    this.app = await setupAppForTesting(Application);
  });
}
