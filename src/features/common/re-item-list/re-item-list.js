import React, { Component } from "react";
import ReactDOM from "react-dom";
import {ReItem} from '../../common';
import _ from 'lodash';
import './re-item-list.scss';


export default function ReItemList ({listItems}) {
	
	const ItemsArr = _.values(listItems).map(function(item){
		return <ReItem item={item} key={item.id} /> 
	});

	return (
	<div className="re-item-list container">
		<div className="listWrap">
		<ul className="list">
		{ItemsArr}
		</ul>
		</div>
	</div>
	)
}