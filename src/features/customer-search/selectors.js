import { createSelector } from 'reselect';
import _ from 'lodash';

const filterList = (state, props) => {
	const searchTxt = _.get(state, 'cust_search.searchStr');
	const customersList = _.get(state, 'cust_search.payload.entities.customers');
	const list =!customersList? []: _.pickBy(customersList, function(obj){
											return _.values(obj).filter(function(val){
													 return _.includes(val,searchTxt);
												}).length>0
										});
	return list
}

export const custListSelector = () =>createSelector(
	[filterList],
	(filterList) => filterList
)