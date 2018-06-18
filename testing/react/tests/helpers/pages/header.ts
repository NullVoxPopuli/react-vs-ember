import {
  interactor, text, isPresent, fillable,
  triggerable
} from '@bigtest/interactor';

const header = '[data-test-header]';

@interactor
export class HeaderPage {
  constructor(selector: string) {}

  fill = fillable(`[data-test-header-input]`);
  submit = triggerable(`[data-test-form]`, 'submit');
}

export default new HeaderPage(header);
