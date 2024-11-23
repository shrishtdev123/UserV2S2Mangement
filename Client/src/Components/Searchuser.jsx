import { useState } from "react";
import { useDataContext } from "./DataContext";
import toast from "react-hot-toast";
import { Admin } from "./Admin";

export const Searchuser = () => {
  const [name, setName] = useState("");
  const [filter, setFilter] = useState([]);
  const { res } = useDataContext();

  const handleSearch = () => {

         if(!name)
         {
              toast.error("field cannot be empty")
              return;
         }
    const filteredResults = res.filter(
      (item) => item.name === name || item.role === name
    );
    setFilter(filteredResults); // Update state immutably
    console.log(filteredResults);
  };

  return (
    <div>
        <div> 
           <Admin/>
        </div>
      <div className="p-4 space-y-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter Name or Role"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Display search results */}
        {filter.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Search Results:</h2>
            <ul className="mt-2 space-y-2">
              {filter.map((item, index) => (
                <li
                  key={index}
                  className="p-3 border border-gray-300 rounded-md bg-gray-50"
                >
                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>
                  <p>
                    <strong>Role:</strong> {item.role}
                  </p>
                  <p>
                    <strong>Age:</strong> {item.age}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* No results */}
        {filter.length === 0 && name && (
          <div className="mt-4 text-red-500">No results found!</div>
        )}
      </div>
    </div>
  );
};
