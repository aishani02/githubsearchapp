import {useState} from "react"
 import {useContext} from "react"
 import UserContext from "./UserContext"
 import AlertContext from "./AlertContext"
 import {getUsers} from "./actions/gitHubAction"
function UserSearch() {

const [text,setText]=useState("")
const {users,dispatch}=useContext(UserContext)
const {setAlert}=useContext(AlertContext)
const handleChange=(e)=>{
    setText(e.target.value)
}
const handleSubmit=async (e)=>{
    e.preventDefault()
    if(text===""){
        setAlert("Please write something","error")
    }
else{
    dispatch({type:"SET_LOADING"})
    const data= await getUsers(text);

      dispatch({ type : "GET_USERS" , payload : data.items})

    setText("")
}

}

function handleClear(){
    
dispatch({type: "Clear"});


}
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2
        lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                <input
                type="text"
                className="w-full pr-40 bg-gray-200 input 
                input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
                value={text} />
                    <button type="submit"
                    className="absolute top-0 right-0 rounded-l-none
                    w-36 btn btn-lg" >
                    GO
                    </button>
            
                </div>
                </div>
            </form>
        </div>
        {users.length > 0 && (<div>
            <button className="btn btn-ghost btn-lg" onClick={handleClear}>Clear</button>
        </div>)}
        </div>
        
    )
}

export default UserSearch
