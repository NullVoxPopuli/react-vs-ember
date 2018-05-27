import Component from '@ember/component';
import { computed } from '@ember-decorators/object';

export default class extends Component {
  props: any; // TODO: specify type

  @computed('props.todosCount')
  get  itemWord() {

    return this.props.todosCount > 1 ? 'items' : 'item';
  }
}
