import React, { Component } from "react";
import ReactDOM from "react-dom";
import {string} from 'prop-types';
import FA from 'react-fontawesome';
import './re-input-box.scss';

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
				<div className="re-input-box ">
				{!this.props.isSearch?
					 <input className="form-control" type={this.props.type} value={this.state.value} placeholder={this.props.placeHolder} onChange={this.onInputChnage} />	
					:			
					<div className="input-group">
					<FA
				        className='form-control fa'
				        name='search'
				        style={{ width: '1%' }}
				    
				      />
					 <input className="form-control faw-input" type={this.props.type} value={this.state.value} placeholder={this.props.placeHolder} onChange={this.onInputChnage} />	
					 
					</div>
				}
				</div>
			)

	}
}