

import UserItem from "./UserItem";

import {useContext} from "react";
import UserContext from "./UserContext";

function UserData() {
   
     const {users,loading}= useContext(UserContext)


     if(!loading){
        return (
        

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">

                {users.map((user)=>{

        
                    console.log(user)

                  
                    return <UserItem  key={user.id} User={user}/>
                })}
           





        </div>
    )
}
else{
  return  <img style= { {width: "15vw", height: "40vh" , margin: "0  auto"}  }src="https://c.tenor.com/gF7Sdx9M76wAAAAi/cat-peach.gif" alt="gif"/>
}



}

export default UserData
