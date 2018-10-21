export function withPerson(id) {
  return WrappedComponent => {
    class StarWarsPersonFetcher extends React.Component<{}, IState> {
      state = { finished: false, result: null };

      fetchData = async () => {
        const { finished, started } = this.state;

        if (finished || started) return;
        this.setState({ started: true });

        const response = await fetch('https://swapi.co/api/people/1');
        const json = await response.json();

        this.setState({ result: json, finished: true });
      }

      render() {
        this.fetchData();

        const { finished, result } = this.state;

        return <WrappedComponent person={result} />
      }
    }
  }
}
