import { useState } from "react"
import { Link } from "react-router-dom";


export const Register = () => {

      const [name,setName]=useState();
      const [password,setPassword]=useState();
      const [email,setEmail]=useState();
      const [confirmpassword,setConfirmpassword]=useState();

  return (
    <div>
            <div className="font-bold text-gray-500 flex justify-center mt-5">
              Creaate New Account
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
        type="text" 
        placeholder="Enter Email" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
    />
    <input 
        type="number" 
        placeholder="Enter Password" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
    />
     <input 
        type="number" 
        placeholder="Enter Confirm Password" 
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={confirmpassword}
        onChange={(e)=>setConfirmpassword(e.target.value)}
    />
   


    <Link to="/">
    <button 
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
        Create Account
    </button>
    </Link>
   </div>
    </div>
  )
}
