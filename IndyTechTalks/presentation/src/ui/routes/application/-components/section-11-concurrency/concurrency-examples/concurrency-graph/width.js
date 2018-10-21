
import { helper as buildHelper } from '@ember/component/helper';

export function computeWidth([start, end, upper]/*, hash*/) {
  return (end === Infinity) ? upper - start : end - start;
}

export const helper = buildHelper(computeWidth);
