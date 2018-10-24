import Component from 'sparkles-component';
import config from 'react-vs-ember/config/environment';
import { service } from '@ember-decorators/service';
import { computed } from '@ember-decorators/object';

export default class Image extends Component {
  @service assetMap;

  rootURL = config.routerRootURL || config.rootURL;

  @computed()
  get path() {
    return this.assetMap.resolve(`images/${this.args.of}`) || this.args.of;
  }
}
