import '../../assets/css/App.css';
import { Movies } from '../movies/Movies';


export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies</h1>
      </header>
      <main>
        <Movies />
      </main>
    </div>
  );
}
