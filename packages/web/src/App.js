import logo from './logo.svg';
import './App.css';
import { sharedVariable,printText } from '@sharecode/common';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{sharedVariable}</div>
        <div>{printText('hello Rana')}</div>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
