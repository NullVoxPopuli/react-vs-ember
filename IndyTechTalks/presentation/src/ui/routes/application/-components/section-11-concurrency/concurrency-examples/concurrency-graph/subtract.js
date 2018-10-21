import { helper as buildHelper } from '@ember/component/helper';

export function subtract([a,b]/*, hash*/) {
  return a-b;
}

export const helper = buildHelper(subtract);
