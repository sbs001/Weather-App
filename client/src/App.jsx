import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
