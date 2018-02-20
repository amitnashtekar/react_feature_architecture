import React, { Component } from "react";
import ReactDOM from "react-dom";
import {ReItem} from '../../common';
import _ from 'lodash';

export default function ReItemList ({listItems}) {
	
	const ItemsArr = listItems.map(function(item){
		return <ReItem item={item} key={item.id} /> 
	});

	return (
		<div>
		<ul>
		{ItemsArr}
		</ul>
		</div>
	)
}