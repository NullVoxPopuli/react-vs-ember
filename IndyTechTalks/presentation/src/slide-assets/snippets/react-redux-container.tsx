// ... redux imports, etc
import Presentation from './presentation';

const mapStateToProps = (state: State) => ({
  todos: list(state)
});

export default connect(mapStateToProps)(Presentation)
