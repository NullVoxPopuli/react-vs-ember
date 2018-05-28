import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { equal, gt } from '@ember-decorators/object/computed';

export default class extends Component {
  props: any; // TODO: specify type

  @equal('props.filter', undefined) showAll!: boolean;
  @equal('props.filter', false) showActive!: boolean;
  @equal('props.filter', true) showCompleted!: boolean;

  @gt('props.completedCount', 0) showClearButton!: boolean;

  @computed('props.todosCount')
  get itemWord() {
    return this.props.todosCount > 1 ? 'items' : 'item';
  }

}
