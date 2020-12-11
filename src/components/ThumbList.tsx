import React from 'react'
import Thumb from './Thumb'
import { MovieDBService } from '../services/MovieDBService';
import { ICarouselItem } from '../data/interfaces';
import ItemsCarousel from './ItemsCarousel';
import { textSpanIsEmpty } from 'typescript';


interface State {
    isLoaded: boolean;
    error: string
}

export class ThumbList extends React.Component<any, any> {

    state: Readonly<State> = {
        isLoaded: false,
        error: ''
    }
    
    componentDidUpdate(prevProps: any) {

        if (this.props.loaded !== prevProps.loaded) {
            this.setState({isLoaded: this.props.loaded})
        }
    }

    render() {

        if (!this.props.loaded) {
            return (<div className="thumbs_container">Loading...</div>)
        }
        else {

            const {thumbs: movies} = this.props;
            const thumbs = movies.map((movie: any, index: number) => {

                return (
                    <Thumb
                        key={index}
                        movie={movie}
                    />
                );
            });
            return (
                <div className="thumbs_container">
                    {thumbs}
                </div>
            )
        }
    }
}