import React, { Component } from 'react';
import './content.css';
import ContentOne from '../ContentOne/ContentOne.js';
import ContentTwo from '../ContentTwo/ContentTwo.js';

class Content extends Component {
  render() {
    return (
      	<div className="content">
        	<div className="contil">这是内容</div>
        	<ContentOne store = {this.props.store}/>
        	<ContentTwo store = {this.props.store}/>
      	</div>
    );
  }
}
export default Content;
