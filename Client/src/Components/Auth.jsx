import { useState } from "react"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export const Auth = ({onLogin}) => {

      const [email,setEmail]=useState();
      const [password,setpassword]=useState();
      const navigate=useNavigate();
          
       const handleclick=()=>{
             
              if(!email||!password)
              {
                    toast.error("please enter valide detail")
                    return;
          }

              if(email==='shrishtdev@gmail.com' && password==='123')
             {      onLogin();
                    navigate("/auth")
             }
             else
             {
                toast.error("Invalid email or password");
             }
            
             
       }

         
  return (
    <div>
       
      <div className="font-bold text-gray-500 flex justify-center mt-5">
              Welcome to V2S2 Manegement System
      </div>

      <div className="font-bold text-gray-500 flex justify-center mt-5 flex-col">
              <h2 className="flex justify-center text-red-500">Email:shrishtdev@gmail.com</h2>
              <h2 className="flex justify-center text-red-500">Password:123</h2>
              <p className="flex justify-center text-red-500">Note:use the above detail to login as Admin</p>
      </div>
       

      <div className="p-4 space-y-4 max-w-sm mx-auto bg-white rounded-lg shadow-md mt-7">
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
        onChange={(e)=>setpassword(e.target.value)}
    />
    


    <button 
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"

         onClick={handleclick}
    >
        login
    </button>
    
   </div>

    </div>
  )
}
