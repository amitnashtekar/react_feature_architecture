import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import {CustomerSearch} from "../../../features";
import {ReButton,ReMenu,ReMenuItem} from "../../common";
import {Button} from 'react-bootstrap';
import './app-header.scss';

export default function HeaderApp() {
	return ( 
			<div id = "sidebar-wrapper" >
				<ul className = "sidebar-nav" >
					<li>
						<Link to = "/" > Home < /Link>
					</li> 
					<li>
						<Link to = "/search" > Search Cutomers < /Link>
					</li>
				</ul>
			</div>
    )

}