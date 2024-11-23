import { Link } from "react-router-dom"


export const Admin = () => {
  return (
    <div>
        <h1 className="font-bold text-gray-500 flex justify-center mt-10">Welcome to User Mangement System</h1>

        <div className="flex gap-4 justify-center mt-5">
          
        <Link to="/">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
            Home
         </button>
        </Link>
        <Link to="/add">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
            add user
         </button>
        </Link>

        <Link to="/show">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
            see user
         </button>
        </Link>

        <Link to="/search">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
            Search user
         </button>
        </Link>

        </div>
    </div>
  )
}
