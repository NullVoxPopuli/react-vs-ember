import Controller from '@ember/controller';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';

import { isBlank } from '@ember/utils';

import RevealService from 'react-vs-ember/services/reveal-service';

export default class extends Controller {
  @service revealService!: RevealService;

  @alias('revealService.isSpeakerNotes') isSpeakerNotes!: boolean;

  speakerNotesUrl() {
    let ss = 'r=true';
    let s = location.search;
    let qs = isBlank(s) ? `?${ss}` : `${s}&${ss}`;

    return ['//', location.host, location.pathname, qs].join('');
  }


  @action launchSpeakerNotes() {
    if (this.isSpeakerNotes) {
      return;
    }

    window.open(this.speakerNotesUrl(), 'reveal.js - Notes', 'width=1100,height=700');
  }
}

