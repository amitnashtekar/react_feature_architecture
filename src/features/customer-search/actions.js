export const _start = "cust_search/START";
export const _success = "cust_search/SUCCESS";
export const _fail = "cust_search/FAIL";

export const searchStart =() => ({ 
type: _start,
loading:true
});

export const searchSuccess =(payload) => ({ 
type: _success,
loading:false,
payload:payload,
error:null
});

export const searchFail =(error) => ({ 
type: _fail,
loading:false,
payload:null,
error:error
});
