import Route from '@ember/routing/route';

// dear, swapi, why don't your results include the id....
function getId(swapiRecord) {
  const url = swapiRecord.url;
  const match = url.match(/\/(\d+)\//);
  const id = match[1];

  return id;
}

export default class StarWarsPerson extends Route {
  async model() {
    const response = await fetch(`https://swapi.co/api/people/`);

    const people = await response.json();

    const withIds = people.results.map(p => ({ ...p, id: getId(p) }));

    return { people: withIds };
  }
}
