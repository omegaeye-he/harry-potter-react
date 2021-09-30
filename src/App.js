import React from 'react'
import logo from './logo.svg'
import './App.css'
// import Login from './Login'
import SearchResult from './SearchResult'

function App() {
  // const getCode = new URLSearchParams(window.location.search)
  // const token = getCode.get("code")
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* { token ? <SearchResult /> : <Login /> }  */}
          <SearchResult />
      </header>
    </div>
  );
}

export default App;
