import React, { Component } from 'react';
import './App.css';
import Head from './Components/Head/Head.js';
import Content from './Components/Content/Content.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head store={this.props.store}/>
        <Content store={this.props.store} />
      </div>
    );
  }
}
export default App;
