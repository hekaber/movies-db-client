import '../assets/css/App.css';
import { Movies } from './Movies';
import { Home } from './Home';
import Header from '../components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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
