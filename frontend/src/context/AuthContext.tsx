import { createContext, useState, useEffect, useContext } from "react";
import { checkAuthStatus, loginUser } from "../helpers/api-communicators";

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isloggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isloggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    // Check if user's cookies or session storage indicate a logged-in status
    async function checkStatus() {
      const data = await checkAuthStatus();
      if (data) {
        setUser({ name: data.name, email: data.email });
        setIsloggedIn(true);
      }
    }
    checkStatus();
  }, []);

  const login = async (email: string, password: string) => {
    // Call the login API
    const data = await loginUser(email, password);
    if (data) {
      setUser({ name: data.name, email: data.email });
      setIsloggedIn(true);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    // Call the signup API
  };

  const logout = async () => {
    // Handle logout
  };

  const value = { isloggedIn, user, login, signup, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

export const useAuth = () => useContext(AuthContext);
