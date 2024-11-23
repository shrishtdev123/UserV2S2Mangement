import { useDataContext } from "./DataContext";
import toast from 'react-hot-toast';
// eslint-disable-next-line react/prop-types
export const Remove = ({ id }) => {
  const { res, setRes } = useDataContext();

  const handlebtn = (id) => {
    
    console.log("Removing item with ID:", id);

   
     
      const updatedData = res.filter((item) => item.id !== id);
      setRes(updatedData);
      toast('User Remove successfully!');

      
     
    
  };

  return (
    <div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => handlebtn(id)}
      >
        Remove
      </button>
    </div>
  );
};
