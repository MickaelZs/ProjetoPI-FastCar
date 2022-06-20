
import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="page-app">

      <header className='App-header'>

      <h1 className='titulo'>Seja Bem Vindo</h1>

      <Link className='link-home' to = '/home' > Home </Link>

      </header>

    </div>
  );
}

export default App;
