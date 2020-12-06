import React from 'react';
import { IMovie } from '../data/interfaces';
import '../assets/css/Thumb.css';

export interface IThumbProps {
    key: number,
    movie: IMovie
}

export function Thumb(thumbProps: IThumbProps) {

    const movie = thumbProps.movie;
    
    return (
        <div className="thumb">
            <div className="poster_container">
                <a className="image" href="/">
                    <img className="poster" src={movie.poster_path} alt="poster" />
                </a>
            </div>
            <div>{movie.title}</div>
            <div>{movie.original_title}</div>
            <div>{movie.original_language}</div>
            <div>{movie.overview}</div>
        </div>
    );
}
