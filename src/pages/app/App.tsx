import React from 'react';
import '../../assets/css/App.css';
import { MovieDBService } from '../../services/MovieDBService';

class App extends React.Component {

  componentDidMount() {
    const movieDBService = new MovieDBService();

    movieDBService.getPopularMovies().then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movies</h1>
        </header>
        <main>

        </main>
      </div>
    );
  }

}

export default App;