import logo from './logo.svg';
import './App.css';
import React from 'react'
import TDList from './TDList';
//test
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/express_backend")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">

      <Navbar />
      <Main />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Everyone
        </p>
        <p>{!data ? "Loading..." : data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <login />
    </div>
  );
}

export default App;
