import React, { Component } from 'react';
import Statelesscomponent from './Statelesscomponent';

class Stateless extends Component {
	constructor(props){
		super(props);
		this.state={currentValue :300,fname:'surender'};
	}
	resetValue= () => {this.setState({currentValue:111});}
	render(){
		console.log('this is stateless Component');
		return (
			<div>
			<Statelesscomponent startWidth={this.state.currentValue} name={this.state.fname}/>
			<button onClick={this.resetValue}>reset</button>

			</div>
				);}
	}
	export default Stateless;