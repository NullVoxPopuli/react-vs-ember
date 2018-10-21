// BEGIN-SNIPPET ember-api-data-fetch-person.ts
import Route from '@ember/routing/route';

export default class StarWarsPerson extends Route {
  async model(params) {
    const url = `https://swapi.co/api/people/${params.id}`;
    const response = await fetch(url);
    const person = await response.json();

    return { person };
  }
}
// END-SNIPPET
