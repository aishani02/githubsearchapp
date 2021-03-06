import {Link} from "react-router-dom"

function UserItem({User : {login , avatar_url}}) {






    console.log(avatar_url)
    return (
        <div className=" card shadow-md compact side bg-base-100">
           
           
           <div className="flex-row items-center space-x-4 card-body">
             

           <div>
               <div className="avatar">
                   <div className="rounded-full shadow w-14 h-14">
                   <img src={avatar_url} alt="avatar"/>
                   </div>
               </div>
           </div>

           <div>

            <h2 className="card-title">{login}</h2>
            <Link   to={`/User/${login}`} className="text-base-content text-opacity"   >View Profile</Link>

           </div>
           </div>
           
           
           
          
        </div>
    )
}





export default UserItem
