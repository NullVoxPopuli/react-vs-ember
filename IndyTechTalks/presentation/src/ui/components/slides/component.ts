import Component from '@ember/component';
import { service } from '@ember-decorators/service';
import { action, observes } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';
import { isPresent, isBlank } from '@ember/utils';
import { instrument, subscribe } from '@ember/instrumentation';

import RevealService, { IPresentationState } from 'react-vs-ember/services/reveal-service';

export default class Slides extends Component {
  @service revealService!: RevealService;

  @alias('revealService.isSpeakerNotes') isSpeakerNotes!: boolean;
  @alias('revealService.presentationHeight') height!: number;
  @alias('revealService.presentationWidth') width!: number;
  @alias('revealService.controls') controls!: boolean;

  transition = 'none'; // none|fade|slide|convex|concave|zoom
  backgroundTransition = 'none'; // none/fade/slide/convex/concave/zoom
  progress = true;
  center = true;

  didInsertElement() {
    this.initializeReveal();
  }

  @observes('revealService.presentationState')
  presentationStateDidChange() {
    this.setRevealState();
  }

  @action togglePresenterView() {
    this.launchSpeakerNotes();
  }

  private initializeReveal() {
    if (this.isSpeakerNotes) {
      return;
    }

    Reveal.initialize(this.revealOptions());

    Reveal.addEventListener('slidechanged', this.revealSlideChanged);
    Reveal.addEventListener('overviewshown', this.revealOverviewShown);
    Reveal.addEventListener('overviewhidden', this.revealOverviewHidden);
    Reveal.addEventListener('paused', this.revealPaused);
    Reveal.addEventListener('resumed', this.revealResumed);

    subscribe('revealService.message', {
      before() {},
      after: (_name, _timestamp, payload) => {
        this.syncRevealState(payload);
      }
    });

    this.setRevealState();
  }

  private revealOptions() {
    let revealOptions: RevealOptions = {
      history: false, // Don't interfere with Ember's routing
      transition: this.transition,
      backgroundTransition: this.backgroundTransition,
      progress: this.progress,
      controls: this.controls,
      center: this.center,
      width: 1280,
      height: 720,
      transitionSpeed: 'fast',
      slideNumber: 'c/t',
      // showSlideNumber: 'speaker',
    };

    if (this.width) {
      revealOptions.width = this.width;
    }

    if (this.height) {
      revealOptions.height = this.height;
    }

    if (this.isSpeakerNotes) {
      revealOptions.showNotes = true;
    }

    return revealOptions;
  }

  private speakerNotesUrl() {
    let ss = 'r=true';
    let s = location.search;
    let qs = isBlank(s) ? `?${ss}` : `${s}&${ss}`;

    return ['//', location.host, location.pathname, qs].join('');
  }

  private launchSpeakerNotes() {
    if (this.isSpeakerNotes) {
      return;
    }

    window.open(this.speakerNotesUrl(), 'reveal.js - Notes', 'width=1100,height=700');
  }



  private syncRevealState(state: IPresentationState) {
    this.revealService.set('indexh', state.indexh);
    this.revealService.set('indexv', state.indexv);

    if (isPresent(state.paused)) {
      this.revealService.set('paused', !!state.paused);
    }
    if (isPresent(state.overview)) {
      this.revealService.set('overview', !!state.overview);
    }
  }

  private setRevealState() {
    let state = this.revealService.presentationState;

    if (state) {
      Reveal.setState(state);
    }
  }


  private revealSlideChanged(event) {
    instrument('emberRevealJs.message', event);
  }

  private revealOverviewShown(event) {
    event.overview = true;
    instrument('emberRevealJs.message', event);
  }

  private revealOverviewHidden(event) {
    event.overview = false;
    instrument('emberRevealJs.message', event);
  }

  private revealPaused(event) {
    event.paused = true;
    instrument('emberRevealJs.message', event);
  }

  private revealResumed(event) {
    event.paused = false;
    instrument('emberRevealJs.message', event);
  }
}
