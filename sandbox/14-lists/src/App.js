import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Placed from './pages/Placed'
import Menu from './pages/Menu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  
  // prevent this.state is null error
  state = {
    
  }
  
  constructor(props) {
    super(props);
    this.confirmReservation = this.confirmReservation.bind(this);
    
  }
  
  confirmReservation(reservationDetails)
  {
    this.setState({
      reservationDetails
    })
  }
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/placed'
            render={(props)=><Placed reservation={this.state.reservationDetails}/>}
          />
          
          <Route path='/menu'>
            <Menu/>
          </Route>
          
          <Route path="/"
           render={(props) => <Home {...props} confirm={this.confirmReservation} />}
          />
          
          </Switch>
      </Router>
    );
  }
}

export default App;
