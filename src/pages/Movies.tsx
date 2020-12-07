import React from 'react';
import { Thumb } from '../components/Thumb';
import { MovieDBService } from '../services/MovieDBService';
import '../assets/css/Movies.css'

interface State {
    isLoaded: boolean;
    items: any[];
    error: string;
}

export class Movies extends React.Component<any, State>  {

    state: Readonly<State> = {
        isLoaded: false,
        items: [],
        error: ''
    }

    componentDidMount() {

        new MovieDBService().getPopularMovies('fr-FR', '1', 'FR').then(
            (result) => {
                if (result.success) {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                }
                else {
                    this.setState({
                        isLoaded: false,
                    });
                }
            }
        );
    }

    render() {

        if (this.state.error) {
            return (<div>Error {this.state.error}</div>)
        }
        else if (!this.state.isLoaded) {
            return (<div>Loading...</div>)
        }
        else {

            const movies = this.state.items;
            const thumbs = movies.map((movie, index) => {

                return (
                    <Thumb
                        key={index}
                        movie={movie}
                        delayTime={index * 500}
                    />
                );
            });
            return (
                <div className="Movies">
                    <div><h1>Movies page</h1></div>
                    <div className="thumbs_container">
                        {thumbs}
                    </div>
                </div>
            )
        }
    }

}