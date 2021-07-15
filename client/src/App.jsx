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

/* 
https://openweathermap.org/img/wn/01d@2x.png
http://api.openweathermap.org/data/2.5/weather?q=madrid&APPID=651a1a00498a9c2594c3518a64d77329
*/