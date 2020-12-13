import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import { IMovie } from '../data/interfaces';
import ImageContainer from './image';

const MoviesTable = (props: any) => {

    const { movies } = props;
    const noImageStyle = {
        width: '100px',
        height: '100px',
        fill: '#C2C2C2'
    };

    const movieRows = movies.map((movie: IMovie, index: number) => {
        return (
            <tr>
                <td>
                    <ImageContainer
                        path={movie ? movie.poster_path : ''}
                        emptyStyle={noImageStyle}
                        active={movie !== undefined}
                    />
                </td>
                <td>{movie.title}</td>
                <td>{movie.overview}</td>
            </tr>
        );
    });
    return (
        <Table responsive="md">
            {movieRows}
        </Table>
    );
}

export default MoviesTable;