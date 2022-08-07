import React from 'react';

const FilmSelector = ({movies, onMovieSelected}) => {
    
    const handleChange = function(event) {
        const chosenMovie = movies[event.target.value];
        onMovieSelected(chosenMovie);
    }

    const movieChoices = movies.map((movie, index) => {
        return <option value={index} key={index}>{movie.title}</option>
    })

    return (
        <select className='selector' defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Movie</option>
            {movieChoices}
        </select>
    )
}

export default FilmSelector;

