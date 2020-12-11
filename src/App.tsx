import './assets/css/App.css';
import { Movies } from './pages/Movies';
import { Home } from './pages/Home';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieDBService } from './services/MovieDBService';

export default function App() {

  // TODO: make this global
  // const movieService = new MovieDBService();
  // movieService.getAPIConfig().then(
  //   (result) => {
  //     console.log(result)
  //   }
  // );
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
