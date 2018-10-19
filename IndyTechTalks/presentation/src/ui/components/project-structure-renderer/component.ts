import Component, { tracked } from 'sparkles-component';

export default class extends Component {
  @tracked _clickId: string | undefined;

  @tracked
  get containsTree() {
    return Object.keys(this.args.tree || {}).length > 0;
  }

  @tracked
  get name() {
    return this.args.tree.name;
  }

  @tracked('name')
  get isFile() {
    return this.name && this.name.includes('.');
  }

  didInsertElement() {
    this._clickId = this.generateId();
  }

  @tracked('_clickId')
  get clickId() {
    return this._clickId;
  }

  onClick() {
    const selector = `#${this.clickId}`;
    const treesToToggle = document.querySelectorAll(selector + ' > li > .tree');

    treesToToggle.forEach(t => t.classList.toggle('expanded'));
  }

  private generateId() {
    const id = Math.random().toString(16).replace('.', '-');
    return `${this.name}-${id}`;
  }

}

