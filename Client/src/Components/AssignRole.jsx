import { useNavigate } from "react-router-dom"
import { Admin } from "./Admin";


// eslint-disable-next-line react/prop-types
export const AssignRole = ({id}) => {
          const navigate=useNavigate();
     const handleRole=(id)=>{
            navigate("/assignrole",{state:{id}})
     }
  return (
    <div>
       <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={()=>handleRole(id)}
      >
        Assign Role
      </button>
    </div>
  )
}
