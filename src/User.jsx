import {useContext} from "react"
import UserContext from "./UserContext"
import {useParams, Link}  from "react-router-dom"
import {useEffect} from "react"
import RepoList from "./RepoList.jsx"
import { getUser } from "./actions/gitHubAction"
import { FaCodepen , FaStore , FaUsers , FaUserFriends   } from "react-icons/fa"



function User() {
    
    const params=useParams()

    console.log(params.id)

    const {user, loading,repos,dispatch} = useContext(UserContext);
    
   useEffect(()=>{


    async function fetchData(){
        dispatch({type:"SET_LOADING"})
    const {data,Reposdata}=await getUser(params.id)
    dispatch({ type : "GET_USER" , payload : {data,Reposdata}})
        
    }


   fetchData();

    
   }, [dispatch,params.id] );


  

   const {login , followers,following,hireable , blog,location,avatar_url,twitter_username, type,
     html_url, name , public_repos,bio,public_gists} = user


     


   if(loading!==true){
    return (
        <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
                Back To Search
            </Link>
        
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md-grid-cols-3 mb-8 md:gap-8">

        <div className="custom-card-image mb-6 md:mb-0">
        

        <div className="rounded-lg shadow-xl card image-full">
            <figure>
                <img src={avatar_url} alt="avatar_url" />
            </figure>
            <div className="card-body justify-end">
                <h2 className="card-title mb-0">
                    {name}
                </h2>
                <p>{login}</p>
            </div>
        </div>

        </div>

       <div className="col-span-2">
           <div className="mb-6">
               <h1 className="text-3xl card-title">
                   {name}
                   <div className="ml-2 mr-1 badge badge-success">
                       {type}
                   </div>
                   {hireable && (
                      <div  className="mx-1 badge badge-info">
                          Hireable
                      </div>
                   )}
               </h1>
               <p>{bio}</p>
               <div className="mt-4 card-actions">
                   <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-outline" >
                       Visit Github Profile
                   </a>
               </div>
           </div>
           <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                       {
                           location && (
                               <div className="stat">
                            <div className="stat-title text-md">
                            Website
                            </div>
                            <div className="text-lg stat-value ">
                            <a 
                            href={`https://${blog}`}
                            target='_blank'
                            rel="noreferrer">
                                {blog}
                            </a>
                            </div>
                               </div>
                           )
                       }
                       {
                           twitter_username && (
                               <div className="stat">
                            <div className="stat-title text-md">
                            Twitter
                            </div>
                            <div className="text-lg stat-value ">
                            <a 
                            href={`https://www.twitter.com/${twitter_username}`}
                            target='_blank'
                            rel="noreferrer">
                                {twitter_username}
                            </a>
                            </div>
                               </div>
                           )
                       }  
           </div>
       </div>

        </div>

                       <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                           <div className="stat">
                               <div className="stat-figure text-secondary">
                                    <FaUsers className="text md:text-5xl"/>
                               </div>
                               <div className="stat-title pr-5">
                                    Followers
                               </div>
                               <div className="stat-value pr-5 text-3xl
                               md:text-4xl">
                                    {followers}
                               </div>

                           </div>
                           <div className="stat">
                               <div className="stat-figure text-secondary">
                                    <FaUserFriends className="text md:text-5xl"/>
                               </div>
                               <div className="stat-title pr-5">
                             Following
                               </div>
                               <div className="stat-value pr-5 text-3xl
                               md:text-4xl">
                                    {following}
                               </div>
                               
                           </div>
                           <div className="stat">
                           <div className="stat-figure text-secondary">
                                    <FaCodepen className="text md:text-5xl"/>
                               </div>
                               <div className="stat-title pr-5">
                                    Public-Repos
                               </div>
                               <div className="stat-value pr-5 text-3xl
                               md:text-4xl">
                                    {public_repos}
                               </div>
                               
                           </div>
                           <div className="stat">
                           <div className="stat-figure text-secondary">
                                    <FaStore className="text md:text-5xl"/>
                               </div>
                               <div className="stat-title pr-5">
                                    Public-Gists
                               </div>
                               <div className="stat-value pr-5 text-3xl
                               md:text-4xl">
                                    {public_gists}
                               </div>
                            
                           </div>
                       </div>
                       <RepoList repos = {repos}/>

        </div>
    )}
    else{
        return <img style= { {width: "15vw", height: "40vh" , margin: "0  auto"}  }src="https://c.tenor.com/gF7Sdx9M76wAAAAi/cat-peach.gif" alt="gif"/>
    }
}

export default User
