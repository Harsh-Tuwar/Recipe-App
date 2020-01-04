import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {

  const APP_ID = 'd0b6f8b5';
  const APP_KEY = '2f68708ccc2a781f391e2cf62123df17';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('paneer');

  useEffect(() => {
      getRecipes();
  }, [query]);
  
  const getRecipes = () => {
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(res => setRecipes(res.data.hits));
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
       <form className="search-form" onSubmit={getSearch}>
         <input className="search-bar" type="text" value={search} onChange={updateSearch} />
         <button className="search-button btn btn-primary" type="submit">Search</button>
       </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
            image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} key={uuid.v4()}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
