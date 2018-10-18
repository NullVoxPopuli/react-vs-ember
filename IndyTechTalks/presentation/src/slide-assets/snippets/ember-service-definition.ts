export default class TodosService extends Service {
  @service store!: DS.Store;

  find(id: ID): Todo | null {
    return this.store.peekRecord('todo', id);
  }

  destroyTodo(id: ID) {
    const record = this.find(id);

    if (record) {
      record.deleteRecord();
    }
  }
  // other functions omitted
}
