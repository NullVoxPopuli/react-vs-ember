import { helper as buildHelper } from '@ember/component/helper';

export function pickFrom([list, index]/*, hash*/) {
  return list[index % list.length];
}

export const helper = buildHelper(pickFrom);
