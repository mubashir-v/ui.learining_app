import  { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Create AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Null means anonymous user
  const navigate = useNavigate();
  const location = useLocation();

  // Function to simulate login
  const login = (userData) => {
    setUser(userData); // Set user details
    const redirectTo = location.state?.from?.pathname || "/";
    navigate(redirectTo, { replace: true }); // Redirect to the page after login
  };

  // Function to simulate logout
  const logout = () => {
    setUser(null);
    navigate("/"); // Redirect to the home page
  };

  // Check if the user is logged in
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access to auth context
export const useAuth = () => useContext(AuthContext);
