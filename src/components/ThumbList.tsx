import React from 'react'
import Thumb from './Thumb'
import { thumbDefault } from '../data/confdata';


const ThumbList = (props: any) => {

    const { movies, loaded } = props;
    let thumbs = [];

    if (movies && movies.length) {
        thumbs = movies.map((movie: any, index: number) => {

            return (
                <Thumb
                    key={index}
                    movie={movie}
                />
            );
        });
    }
    else {
        for(let i=0; i < 20; i++) {
            thumbs.push(
                <Thumb
                    key={i}
                    movie={null}
                />
            );
        }
    }
    console.log(thumbs);

    return (
        <React.Fragment>
            <div className="thumbs_view">
                <div className="thumbs_container">
                    {thumbs}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ThumbList;