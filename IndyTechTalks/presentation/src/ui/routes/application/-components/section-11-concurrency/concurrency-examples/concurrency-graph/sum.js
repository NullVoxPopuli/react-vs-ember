import { helper as buildHelper } from '@ember/component/helper';

export function sum([a,b]/*, hash*/) {
  return a+b;
}

export const helper = buildHelper(sum);
