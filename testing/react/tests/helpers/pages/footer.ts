import {
  interactor, text, isPresent
} from '@bigtest/interactor';

const footer = '[data-test-footer]';

@interactor
export class FooterPage {
  constructor(selector: string) {}

  countText = text(`[data-test-count]`);
  clearButtonIsPresent = isPresent(`[data-test-clear-button]`);
}

export default new FooterPage(footer);
