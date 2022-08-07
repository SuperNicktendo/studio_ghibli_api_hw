import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, {useState, useEffect} from 'react';
import MovieList from '../components/FilmList';
import MovieDetail from '../components/FilmDetail';
import FilmSelector from '../components/FilmSelect';

const MovieContainer = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(movies => setMovies(movies))
    }
    
        const onMovieSelected = function(movie){
            setSelectedMovie(movie);
        }

    return (
        <div className="main-container">
            <FilmSelector movies={movies} onMovieSelected={onMovieSelected} />
            {selectedMovie ? <MovieDetail selectedMovie={selectedMovie}/> : null}
        </div>
    )

};

export default MovieContainer;
