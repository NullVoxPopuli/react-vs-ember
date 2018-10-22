import Controller from '@ember/controller';
import { service } from '@ember-decorators/service';
import { alias } from '@ember-decorators/object/computed';

import RevealService from 'react-vs-ember/services/reveal-service';

export default class extends Controller {
  @service revealService!: RevealService;


  // sync the query params to the service so we can access
  // the query param state from components that inject
  // the service
  queryParams = ['h', 'v', 'r', 'p', 'o', 'c', 't', 'ct', 'pw', 'ph', 'print-pdf'];
  @alias('revealService.indexh') h!: number;
  @alias('revealService.indexv') v!: number;
  @alias('revealService.paused') p!: boolean;
  @alias('revealService.overview') o!: boolean;
  @alias('revealService.controls') c!: boolean;
  @alias('revealService.themePreference') t!: string;
  @alias('revealService.codeThemePreference') ct!: string;
  @alias('revealService.presentationWidth') pw!: number;
  @alias('revealService.presentationHeight') ph!: number;
  @alias('revealService.printPdf') printPdf!: boolean;


  @alias('revealService.isSpeakerNotes') r!: boolean;
  @alias('revealService.isSpeakerNotes') isSpeakerNotes!: boolean;


}

