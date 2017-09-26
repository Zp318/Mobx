import React, { Component } from 'react';
import './ContentTwo.css';
import {observer} from 'mobx-react';

const ContentTwo = observer(class ContentTwo extends Component {
  render() {
  	const {store} = this.props;
    return (
      	<div className="ContentTwo">
        	ContentTwo---{store.content.two.y}
      	</div>
    );
  }
})
export default ContentTwo;
