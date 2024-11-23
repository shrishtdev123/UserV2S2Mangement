import { useLocation } from "react-router-dom"
import { useDataContext } from "./DataContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { Admin } from "./Admin";


export const RoleAssign = () => {
     const {state}=useLocation();
     const {res}=useDataContext();
     const [role,setRole]=useState();
     const {id}=state;
  
      const handleRole=()=>{
           
           for(let i=0;i<res.length;i++)
           {
                if(res[i].id===id)
                {
                     res[i].role=role;
                     setRole("");
                     toast.success('Role Assign successfully!');
                     break;
                }
           }
      }
  return (
    <div >
        <Admin/>
       <div className="p-4 space-y-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
       <input 
        type="text" 
        placeholder="Enter Role" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={role}
        onChange={(e)=>setRole(e.target.value)}
    />

     <button 
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={handleRole}
    >
        Assign Role
    </button>
       </div>
    </div>
  )
}
