import { Remove } from "./Remove";
import { Update } from "./Update";
import { useDataContext } from "./DataContext";
import { AssignRole } from "./AssignRole";
import { Admin } from "./Admin";

export const Main = () => {
  const { res, setRes } = useDataContext();

  console.log(res);

  return (
    <div>
        <div>
            <Admin/>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {res.map((item) => (
          <div key={item.id} className="p-4 border rounded">
            <h1 className="font-bold">Name: {item.name}</h1>
            <h2 className="text-gray-600">Age: {item.age}</h2>
            <h2 className="text-gray-600">ID: {item.id}</h2>
            <h2 className="text-gray-600">Role: {item.role}</h2>
            <h2 className="text-gray-600">Status: {item.status}</h2>
            <h2 className="text-gray-600">Email: {item.email}</h2>
            <h2 className="text-gray-600">Salary: {item.salary}</h2>

            <div className="flex justify-between mt-4">
              {/* Remove Component */}
              <Remove id={item.id} />

              {/* Assign Role Button */}
              <AssignRole id={item.id} />

              {/* Update Component */}
              <Update id={item.id} res={res} setRes={setRes} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
