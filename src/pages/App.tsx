import '../assets/css/App.css';
import { Movies } from './Movies';
import { Home } from './Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Movies</h1>
          <nav className="App-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
