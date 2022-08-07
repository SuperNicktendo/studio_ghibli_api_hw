import React from 'react';
import './App.css';
import MovieList from './components/FilmList';
import MovieContainer from './containers/MovieContainer';

function App() {
  return (
    <div className="App">
      <h1 className='header'>Studio Ghibli Movies</h1>
      <MovieContainer />
      <div className='endpoint'></div>
    </div>
  );
}

export default App;
