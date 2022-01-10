
import { createContext , useReducer} from "react";
import githubReducer from "./githubReducer";


const UserContext=createContext()




export const UserContextProvdier=({children})=>{
     
       
          

           const initialState =  {users : [] , user : {},repos:[],loading : false }

           const [state, dispatch] =  useReducer(githubReducer ,initialState )


return (<UserContext.Provider value={{ ...state, dispatch }}>

    {children}
</UserContext.Provider>)



}



export default UserContext;
