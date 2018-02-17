import React, { Component } from "react";
import ReactDOM from "react-dom";
import {func, string} from 'prop-types';

ReButton.propTypes = {
	text: string.isRequired,
	clickHandler: func
}
ReButton.defaultProps = {
	text: ''
}


 export default function ReButton ({clickHandler, text}) {
	return (
		<button onClick={clickHandler}>{text}</button>
		)
	}



 