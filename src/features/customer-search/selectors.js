import { createSelector } from 'reselect';
import _ from 'lodash';

const filterList = (state, props) => {
	const searchTxt = _.get(state, 'cust_search.searchStr');
	const customersList = _.get(state, 'cust_search.payload.customers');
	const list =!customersList? state: _.filter(state.cust_search.payload.customers, function(custObj){
									  return _.filter(_.values(custObj),function(val){
									          return _.includes(val,searchTxt);

									        }).length>0 
									});
	return list
}

export const custListSelector = () =>createSelector(
	[filterList],
	(filterList) => filterList
)