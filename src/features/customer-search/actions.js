import axios from 'axios';
import customers from '../../data/customers.JSON';
export const _start = "cust_search/START";
export const _success = "cust_search/SUCCESS";


export const searchStart =(searchStr) => ({ 
type: _start,
loading:true,
searchStr
});

export const searchSuccess =(payload) => ({ 
type: _success,
loading:false,
payload:payload,
error:null
});



// export const getCustomer=(searchStr)=> {
// 	return axios.get('/src/data/customers.json')
//             .then((resp)=>{
//             	return resp;
//             }).catch((err)=>{
//             	return err;
//             })
// } 
 export const getCustomer=(date) =>{
  return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({
           customers
        });
      }, 2000);
   });
  }


