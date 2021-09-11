import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Teams from './pages/Teams';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
     <Switch>
       <Route path="/" component={Home} exact/>
       <Route path="/teams-announcements" component={Teams} exact/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
