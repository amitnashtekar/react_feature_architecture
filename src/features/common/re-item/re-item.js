import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';
import './re-item.scss';

export default function ReItem ({item}) {
	const makeItem= _.keys(item).map(function(keyName){
		return <span className="li-span">{item[keyName]}</span>
	});
	return (
			<li className="re-item">
			{
				makeItem
			}
			</li> 
		) 
} 