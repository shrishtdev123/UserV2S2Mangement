import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export const Update = ({id}) => {
        
     
       const nevigate=useNavigate();
       const handlebtn=(id)=>{
          nevigate("/edit",{state:{id}});
       }
  return (
    <div>
        <button className="bg-green-500 text-white px-4 py-2 rounded"
          
          onClick={()=>handlebtn(id)}
          >Edite

          </button>
    </div>
  )
}
