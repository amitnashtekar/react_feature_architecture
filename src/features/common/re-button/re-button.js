import React, { Component } from "react";
import ReactDOM from "react-dom";
import {func, string} from 'prop-types';

ReButton.propTypes = {
	text: string.isRequired,
	clickHandler: func,
	isVisible:string
}
ReButton.defaultProps = {
	text: '',
	isVisible:'block'
}



 export default function ReButton ({clickHandler, text, isVisible}) {
 	var btnStyle = {
	  display:isVisible
	};
	return (
		<button className="re-button" style={btnStyle} onClick={clickHandler}>{text}</button>
		)
	}



 