import React, { Component } from 'react';
import './ContentOne.css';

class ContentOne extends Component {
  render() {
  	const {store} = this.props;
    return (
      	<div className="ContentOne">
        	ContentOne---{store.completedCount}
      	</div>
    );
  }
}
export default ContentOne;
