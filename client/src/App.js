import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/AboutUs';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import logo from './logo.svg';
import axios from 'axios'

class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              SellArt, a new sight on all arts!
            </p>
            <Navigation />
          </header>
          <h1>Hello from the frontend!</h1>
          <h1>{this.state.response.body}</h1>
          <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route component={Error}/>
           </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
