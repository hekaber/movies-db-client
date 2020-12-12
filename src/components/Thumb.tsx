import React from 'react';
import { IMovie } from '../data/interfaces';
import '../assets/css/Thumb.css';
import { GrImage } from 'react-icons/gr';

export interface IThumbProps {
    key: number,
    movie: IMovie | null,
}

const Thumb = (props: IThumbProps) => {

    const { movie } = props;
    const noImageStyle = { 
        width: '100px', 
        height: '100px',
        fill: '#C2C2C2'
    };

    let imgElement = (
        <div className={movie ? 'no_image' : 'no_image animate'}>
            <GrImage style={noImageStyle} />
        </div>
        
    );
    let contentElement = (<div className="content"></div>);

    if (movie) {

        if (movie.poster_path) {
            imgElement = <img className="poster" src={movie.poster_path} alt="poster" />
        }

        contentElement = (
            <div className="content">
                <h5>{movie.title}</h5>
                <p>
                    ({movie.original_title})<br />
                    {movie.release_date}
                </p>
            </div>
        );
    }

    return (
        <div className='thumb'>
            <a className="image" href="/">
                {imgElement}
            </a>
            {contentElement}
            <div className="summary hide"></div>
        </div>
    );
}

export default Thumb;
