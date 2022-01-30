import { Provider } from 'react-redux';
import { CounterButton } from './CounterButton';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <h1>State Management Example - Using Redux</h1>
      <CounterButton />
    </Provider>
  );
}

export default App;
