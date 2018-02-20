import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';

export default function ReItem ({item}) {
	const makeItem= _.keys(item).map(function(keyName){
		return <div>{item[keyName]}</div>
	});
	return (
		<li>
		{
			makeItem
		}
		</li> 
		) 
} 