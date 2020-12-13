import React, { useEffect } from 'react';
import Thumb from './Thumb'
import { useState } from 'react';


const ThumbList = (props: any) => {

    const { movies, name, onActive } = props;
    let thumbs = [];
    const [active, setstate] = useState(false);
    const thumbRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const position = thumbRef.current?.getBoundingClientRect();

        function handleScroll(e: Event) {

            const verticalPos = position ? position.y : Infinity;
            const currWindowBottom = window.scrollY + window.innerHeight;

            if (verticalPos < currWindowBottom) {
                setstate(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        if (active) {
            onActive(name);
        }
        return () => { window.removeEventListener('scroll', handleScroll)}
        // eslint-disable-next-line
    }, [active]);

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

    return (
        <React.Fragment>
            <div ref={thumbRef} className="thumbs_view">
                <div className="thumbs_container">
                    {thumbs}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ThumbList;