
import { useLocation } from "react-router-dom";
import { useDataContext } from "./DataContext";
import { useState } from "react";
import toast from 'react-hot-toast';
import { Admin } from "./Admin";

export const Edite = () => {
   
      const {state}=useLocation();
      const {id}=state;
      const {res}=useDataContext()
    
      const [name,setName]=useState();
      const [age,setAge]=useState();
      const [role,setRole]=useState();
      const [status,setStauts]=useState();
      const [email,setEmail]=useState();
      const [salary,setSalary]=useState();

       const handleupdate=()=>{
        if (!name || !age || !role || !status || !email || !salary) 
            {
            toast.error("Please fill all fields!");
            return;
           }

        for(let i=0;i<res.length;i++)
            {
                if(res[i].id===id)
                {
                     res[i].name=name
                     res[i].age=age
                     res[i].role=role
                     res[i].status=status
                     res[i].email=email
                     res[i].salary=salary
                     setAge("");
                     setName("");
                     setRole("");
                     setStauts("");
                     setEmail("");
                     setSalary("");
                     toast.success('Data updated successfully!');
                     break;
                }

            }
       }
       

    
      
               
    
  return (
    <div>
         <div>
            <Admin/>
         </div>
            <div className="p-4 space-y-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
         <input 
        type="text" 
        placeholder="Enter Name" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e)=>setName(e.target.value)}
    />
    <input 
        type="number" 
        placeholder="Enter Age" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
    />
    <input 
        type="text" 
        placeholder="Enter Role" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={role}
        onChange={(e)=>setRole(e.target.value)}
    />
    <input 
        type="text" 
        placeholder="Enter Status" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={status}
        onChange={(e)=>setStauts(e.target.value)}

    />

<input 
        type="text" 
        placeholder="Enter Email" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}

    />
      <input 
        type="text" 
        placeholder="Enter Salary" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}

    />
    <button 
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={handleupdate}
    >
        Save
    </button>
   </div>
    </div>
  )
}
