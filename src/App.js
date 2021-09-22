import React from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './Login'
import SearchResult from './SearchResult'
import { useToken } from './useToken'

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchResult token={token} />
      </header>
    </div>
  );
}

export default App;
