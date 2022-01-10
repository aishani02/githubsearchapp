const githubReducer = (state , action)=>{

switch(action.type){

case "GET_USERS":
     
      return {...state ,   users : action.payload ,  loading : false }


case "GET_USER":
    return {...state , user : action.payload.data, repos : action.payload.Reposdata ,loading:false}

case "Loading":
    return {...state , loading: false}  
case "SET_LOADING":
return {...state , loading : true};    
    
case "Clear":
    return {...state , users: [] } 
    
    
 
default :
      

    return state;



}




}




export default githubReducer;