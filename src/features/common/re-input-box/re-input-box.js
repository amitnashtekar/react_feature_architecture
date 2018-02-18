import React, { Component } from "react";
import ReactDOM from "react-dom";

import {string} from 'prop-types';

export default class ReInputBox extends Component {

	state={
		value:''
	}

	static propTypes= {
		type:string.isRequired,
		placeHolder: string
	}
	static defaultProps= {
		type: 'text',
		placeHolder:''
	}

	onInputChnage =(e)=>{
		e.persist();
		this.setState(prevState => ({ value:e.target.value}));
		this.props.onTextEnter(e.target.value);
	}

	render(){
		return (
				<input type={this.props.type} value={this.state.value} placeholder={this.props.placeHolder} onChange={this.onInputChnage} />	
			)
	}
}