import React from "react";
import { Component } from "react"

import { BrowserRouter, Route} from 'react-router-dom'

import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import Nav from './components/Nav'
import Home from './components/Home'

class App extends Component{

  render(){

  return (
    <BrowserRouter>
    <div className="App">
        <Route path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
    </div>
    </BrowserRouter>
  );
  }
}
export default App;
