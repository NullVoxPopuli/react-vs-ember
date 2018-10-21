import Route from '@ember/routing/route';

export default class StarWarsPerson extends Route {
  async model() {
    const response = await fetch(`https://swapi.co/api/people/`);
    const people = await response.json();

    return { people };
  }
}
