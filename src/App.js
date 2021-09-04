import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Teams from './pages/Teams';
import Events from './pages/Events';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
     <Switch>
       <Route path="/" component={Home} exact/>
       <Route path="/teams" component={Teams}/>
       <Route path="/events" component={Events}/>
     </Switch>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
