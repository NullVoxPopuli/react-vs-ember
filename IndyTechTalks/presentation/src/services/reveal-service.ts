import Service from '@ember/service';
import { computed } from '@ember-decorators/object';

export default class RevealService extends Service {
  indexh = null;
  indexv = null;
  paused = false;
  overview = false;
  controls = true;
  isSpeakerNotes = false;

  @computed('indexh', 'indexv', 'paused', 'overview')
  get presentationState() {
    return {
      indexh: this.indexh,
      indexv: this.indexv,
      paused: this.paused,
      overview: this.overview,
    };
  }
}
