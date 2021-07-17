import { Route, BrowserRouter,Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
