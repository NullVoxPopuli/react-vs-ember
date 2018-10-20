import { Router } from 'react-router-dom';
import { ReduxProvider } from '@store/index';
import TodoMVC from '@ui/components/todo-mvc';

class TestWrapper extends React.Component<any, any> {
  render() {
    const { component, componentProps, initialState, history } = this.props;
    const ComponentToTest = component || TodoMVC;
    const propsForComponent = componentProps || {};

    return (
      <ReduxProvider initialState={initialState || {}}>
        <Router history={history}>
          <ComponentToTest { ...propsForComponent } />
        </Router>
      </ReduxProvider>
    )
  }
}

