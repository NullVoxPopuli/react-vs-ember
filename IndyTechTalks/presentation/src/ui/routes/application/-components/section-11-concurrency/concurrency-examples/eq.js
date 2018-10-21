import { helper as buildHelper } from '@ember/component/helper';

export function eq([a,b]/*, hash*/) {
  return a === b;
}

export const helper = buildHelper(eq);
