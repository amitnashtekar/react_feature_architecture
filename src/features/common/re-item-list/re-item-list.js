import React, { Component } from "react";
import ReactDOM from "react-dom";
import {ReItem} from '../../common';
import _ from 'lodash';
import './re-item-list.scss';


export default function ReItemList ({listItems}) {
	
	const ItemsArr = _.values(listItems).map(function(item){
		return <ReItem item={_.omit(item,['id'])} key={item.id} /> 
	});

	return (
			<div className="re-item-list">
				<div className="container">
				<ul className="list">
				{ItemsArr}
				</ul>
				</div>
			</div>
	)
}