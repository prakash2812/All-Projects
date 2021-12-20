import React, { Component } from 'react';
import './App.css';
import Blog from './containers/Blog/Blog'
import { BrowserRouter } from 'react-router-dom'

class DemoApp1 extends Component {
  render() {
    return (
      // <BrowserRouter basename='/myapp'>
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default DemoApp1