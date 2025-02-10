import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../services/auth/firebase/firebase";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children })=> {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        setIsAuthenticated(true);
      } else {
        setUser(null); 
        setIsAuthenticated(false); 
      }
    });

    return unsubscribe;
  }, [location.pathname, navigate]);

  return (
    <AuthContext.Provider value={{ user,isAuthenticated }}>{children}</AuthContext.Provider>
  );
}


