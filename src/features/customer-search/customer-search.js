import React, { Component } from "react";
import ReactDOM from "react-dom";
import {string} from 'prop-types';
import {ReButton, ReInputBox} from "../common";
import './customer-search.scss';
class CustomerSearch extends Component {
 state = { title:  'Welcome to React setup!!!'};
 static propTypes = {
  text: string
  
}
 static defaultProps={text:"search"}
 clickHandler = () => {
  alert('You clicked me !!!');
 }
  render() {
    return (
      <div>
      <div id="customer-search" className="customer-search">{this.state.title}</div>
      <ReInputBox placeHolder="enter text to search" ></ReInputBox>
      <ReButton clickHandler={this.clickHandler} text={this.props.text}></ReButton>

      </div>
    );
  }
}
export default CustomerSearch;