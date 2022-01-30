import { RecoilRoot } from 'recoil';
import './App.css';
import { CounterButton } from './CounterButton';
import { DisplayCount } from './DisplayCount';

function App() {
  /*
    RecoilRoot will keep track of all the Recoil states in our application and allow our components inside of the RecoilRoot
    to access their values.
  */
  return (
    <RecoilRoot>
      <DisplayCount />
      <h1>State Management Example - By Using Recoil</h1>
      <CounterButton />
    </RecoilRoot>
  );
}

export default App;
