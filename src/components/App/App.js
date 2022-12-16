import React from 'react';
import './App.css';
import BusinessList from '../Business/BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';


class App extends React.Component {
  render(){
    return (
    <div className="App">
      <h1>Pet Project</h1>
      <SearchBar/>
      <BusinessList/>
    </div>
  );
  }
}

export default App;
