import logo from './logo.svg';
import './App.css';
import React from 'react'
import Login from './login.js';
import Main from './Main.js';
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
      <Main />
    </div>
  );
}

export default App;
