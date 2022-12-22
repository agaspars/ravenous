import React from 'react';
import './App.css';

import BusinessList from '../Business/BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

// const business = {
//   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// const businesses = [
//   business,
//   business,
//   business,
//   business,
//   business,
//   business
// ]

class App extends React.Component {

  searchYelp(term,location,sortBy) {
    // console.log(`term ${term} Loc ${location} sort ${sortBy} `)
    Yelp.search(term,location,sortBy).then(businesses=> {
      this.setState({businesses: businesses})
    })
  }

  constructor(props){
    super(props)
    this.state = {
      businesses: [],
    }
    this.searchYelp=this.searchYelp.bind(this)
  }

  render(){
    return (
    <div className="App">
      <h1>Pet Project</h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses}/>
    </div>
  );
  }
}

export default App;
