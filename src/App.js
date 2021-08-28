import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
     <Switch>
       <Route path="/" component={Home} exact/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
