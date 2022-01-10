
import axios from "axios";


const url =`${process.env.REACT_APP_GITHUB_URL}`

const token = process.env.REACT_APP_GITHUB_TOKEN


   const github = axios.create({
       baseURL: url,
       headers:{
        Authorization : `token ${token}`
    }

   })


        export const getUsers= async (text) =>{
            
            const res = await  github.get(`search/users?q=${text}`)   
            
         
           
           
            return res.data;
          
           


        }
export const getUser= async (login) =>{

      

    const params = new URLSearchParams({
        sort: "created", 
        per_page : 10
    })
    
   
    const [res, responseRepos] =  await Promise.all([github.get(`/users/${login}`) ,  github.get(`/users/${login}/repos?${params}`)])
    
    
    return { data : res.data,Reposdata: responseRepos.data}
 


  
   

}