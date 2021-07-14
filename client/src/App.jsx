import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
// import { getWather } from './utils';

function App() {

  // getWather('avellaneda').then((data) => console.log(data))

  return (
    <div className="App">
      <Nav />
      <HashRouter>
        <Route exact path='/' component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
