import React from 'react';
import '../../assets/css/App.css';
import config from '../../app-config.json';
import { APIService } from '../../services/APIService';
import { Enpoints } from '../../data/constants';

class App extends React.Component {

  componentDidMount() {
    const api = new APIService(config.APIKey)
    .setHeaders([
      {
        key: 'Content-Type',
        value: 'application/json'
      }
    ]);

    fetch(
      config.MovieDBBaseURL + Enpoints.popular_movies + '?language=fr-FR&page=1&region=FR',
      api.request({})
    )
    .then(res => res.json())
    .then(
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