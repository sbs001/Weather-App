import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
// import { getWather } from './utils';

function App() {

  // getWather('avellaneda').then((data) => console.log(data))

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <Route path='*' component={Nav} /> */}
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
