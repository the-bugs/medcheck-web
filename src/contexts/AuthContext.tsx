import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

type UserType = {
  nome: string;
  email: string;
  tipo: string;
  user_id: number;
};

type AuthContextType = {
  user: UserType | null;
  login: (username: string, senha: string) => void;
  logout: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, senha: string) => {
    try {
      const port = "http://localhost:3001";

      const response = await axios.post(
        `${process.env.REACT_APP_API_HOST}/auth/login`,
        {
          email,
          senha,
        }
      );

      // Save the user data in local storage
      localStorage.setItem("authToken", response.data.access_token);
      const token = localStorage.getItem("authToken");

      if (token) {
        const decodedToken = jwtDecode<any>(token);
        localStorage.setItem("userInfo", JSON.stringify(decodedToken));
        setUser(decodedToken);
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  // Checa se existe token no local storage
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      const decodedToken = jwtDecode<any>(token);
      setUser(decodedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
