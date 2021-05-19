import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Solutions from './components/Solutions';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/solutions">
            <Solutions />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div >

  );
}

export default App;