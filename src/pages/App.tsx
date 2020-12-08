import '../assets/css/App.css';
import { Movies } from './Movies';
import { Home } from './Home';
import Navigator from '../components/Navigator';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigator />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
