import React, { Component } from 'react';
import './Head.css';
import HeaderOne from '../HeaderOne/HeaderOne.js';
import HeaderTwo from '../HeaderTwo/HeaderTwo.js';

class Head extends Component {
  render() {
    return (
      	<div className="head">
        	<div className="title">这是头部</div>
        	<HeaderOne store = {this.props.store}/>
        	<HeaderTwo store = {this.props.store}/>
      	</div>
    );
  }
}
export default Head;
