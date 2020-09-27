import React from 'react';
import './App.css';
import Recipe from '../components/recipe/Recipe'
import Search from '../components/search/Search'
import Scrollbar from '../components/scrollbar/Scrollbar'

class App extends React.Component {

  constructor(){
    super();
    this.app_id = 'c729177d';
    this.app_key = '6333bde595e200c8d1468d47b38c589d';
    

    this.state = {
      recipes : [],
      searchField : ""
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  onSearchBtnClick = () =>{
    const url =  `https://api.edamam.com/search?q=${this.state.searchField}&app_id=${this.app_id}&app_key=${this.app_key}`;
    console.log(this.state.searchField);
    console.log(url);

    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({recipes: data.hits});
    });
  }

  componentDidMount(){
    const url =  `https://api.edamam.com/search?q=coffee&app_id=${this.app_id}&app_key=${this.app_key}`;
    
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({recipes: data.hits});
    });
  }
  
  render(){
    return (
      <div className="App">
          <Search searchChange = {this.onSearchChange} searchBtnClick = {this.onSearchBtnClick}/>

          < Scrollbar>
            <div className="recipes_container">
              {this.state.recipes.map(recipe => (
                <Recipe result={recipe}/>
              ))}
            </div>
          </Scrollbar>
          
      </div>
    );
  }
  
}

export default App;
