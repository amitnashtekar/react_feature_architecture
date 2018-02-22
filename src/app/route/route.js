import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import {ReButton} from "../../features/common";
import {CustomerSearch} from "../../features";
import {HeaderApp} from "../../features/common";

export default class Router extends Component {

	render() {
		return(
			<BrowserRouter>
				<div>		
			<HeaderApp/>
			<div id="page-content-wrapper">
			  <div className="container-fluid">
				<Switch>
					<Route path="/search" component={CustomerSearch} />
					<Route exact path="/" component={()=>{
						return (
							<div className="container">
							<div className="row">
							<div className="col-lg-8 col-lg-offset-8">
							<h1 className="home-header">Thank you</h1>
							</div>
							</div>
							</div>
							)
					}} />
					<Redirect from='*' to='/' /> 
				</Switch>
				</div>
				</div>
				</div>
			</BrowserRouter>
			)
	}
}

