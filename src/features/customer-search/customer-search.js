import React, { Component } from "react";
import ReactDOM from "react-dom";
import {string, array, object} from 'prop-types';
import { connect } from 'react-redux'
import {ReButton, ReInputBox, ReItemList} from "../common";
import * as cust_search_actions from './actions';
import { bindActionCreators } from 'redux';
import {custListSelector} from './selectors';
import './customer-search.scss';


class  CustomerSearch extends Component {
 
 static propTypes = {
  text: string,
  filteredList: object
  
}
 static defaultProps={
    text:"search",
    filteredList:{}
  }

 clickHandler = () => {
  alert('THANK YOU !!');  
 }

 onTextEnter=(searchText)=>{
  this.props.actions.searchStart(searchText);
 }
  render() {
    return (
        <div>
          <ReInputBox placeHolder="enter text to search" onTextEnter={this.onTextEnter} isSearch="true" ></ReInputBox>
          <ReButton clickHandler={this.clickHandler} text={this.props.text} isVisible="none"></ReButton>
          {this.props.filteredList ?<ReItemList listItems={this.props.filteredList}/>:null}
        </div>
    );
  }
}

const getmapStateToProps = () => {
const filterList = custListSelector();
const mapStateToProps = ({cust_search},props) => {
  return {
    filteredList:filterList(cust_search, props)
  }

};
return mapStateToProps
}



const CustomerSearchContainer = connect(
getmapStateToProps,
dispatch => ({actions:bindActionCreators(cust_search_actions, dispatch)})

)(CustomerSearch);

export default CustomerSearchContainer;