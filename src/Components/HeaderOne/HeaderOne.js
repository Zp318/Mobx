import React, { Component } from 'react';
import './HeaderOne.css';



class HeaderOne extends Component {
	onReset(){
		this.props.store.resetTimer();
	}

	render() {
		const {store} = this.props;
	    return (
	      	<div className="HeaderOne" onClick = {this.onReset.bind(this)}>
	        	HeaderOne---{store.head.one.x}
	      	</div>
	    );
	}
}
export default HeaderOne;

