import React from 'react';
import Thumb from '../components/Thumb';
import { MovieDBService } from '../services/MovieDBService';
import MoviesTable from '../components/pagination';
import '../assets/css/ThumbsList.css'

interface State {
    isLoaded: boolean;
    items: any[];
    error: string;
    category: string;
}

export class Movies extends React.Component<any, State>  {

    state: Readonly<State> = {
        isLoaded: false,
        items: [],
        error: '',
        category: 'popular'
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
        const { category } = this.props.match?.params;

        if (this.state.error) {
            return (<div>Error {this.state.error}</div>)
        }
        else if (!this.state.isLoaded) {
            return (<div>Loading...</div>)
        }
        else {

            return (
                <MoviesTable
                    movies={this.state.items}
                />
            )
        }
    }
}