import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Components/Main";
import { AddUser } from "./Components/AddUser";
import { Admin } from "./Components/Admin";
import { Edite } from "./Components/Edite";
import { DataProvider } from "./Components/DataContext";
import { RoleAssign } from "./Components/RoleAssign";
import { Searchuser } from "./Components/Searchuser";
import { Auth } from "./Components/Auth";
import { Register } from "./Components/Register"; // Import Register component
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* Register route */}
          <Route path="/r" element={<Auth/>} />
          {/* Authentication and protected routes */}
          {!isAuthenticated ? (
            <Route path="/" element={<Auth onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/auth" element={<Admin />} />
              <Route path="/add" element={<AddUser />} />
              <Route path="/show" element={<Main />} />
              <Route path="/edit" element={<Edite />} />
              <Route path="/assignrole" element={<RoleAssign />} />
              <Route path="/search" element={<Searchuser />} />
              <Route path="/login" element={<Auth/>}/>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
