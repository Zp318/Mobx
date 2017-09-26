import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {observable,computed,action,autorun} from 'mobx';
import {Provider} from 'mobx-react';

var store = observable({
    head:{
    	one:{"x":1},
    	two:{"y":2}
    },
    content:{
    	one:{"x":3},
    	two:{"y":4}
    },
    // 这是action
    resetTimer: action(function reset() {
	    this.content.two.y++;
	}),
    // 这是computed
    completedCount: computed(function() {
        return (this.content.one.x + 17);
    })

    // 严格模式下必须用这种写法，平常最好也用这种写法
    // 这是action
	// resetTimer: function reset() {
	//     this.content.two.y++;
	// },

    // 这是computed
    // get completedCount() {
    //     return (this.content.one.x + 17);
    // }
    
});

// 额外的东西，辅助的作用
auto:autorun(()=>{
    if(store.content.two.y>10){
        console.log("@@@@@@@")
    }
})

ReactDOM.render(
	<App store={store}/>,
	document.getElementById('root')
);

