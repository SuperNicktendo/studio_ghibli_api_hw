import React from 'react';

const FilmItem = ({movie}) => {
    return <div className='film-item'>{movie.title}</div>
};

export default FilmItem;