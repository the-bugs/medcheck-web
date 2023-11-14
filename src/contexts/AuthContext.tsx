import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type User = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

// Contexto para verificação de autenticação.
//Para deslogado, o usuário é null. Para logado, o usuário é um objeto com nome e email.
//MAYBE: Implementar token para localStorage.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = async (data: User) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_IP}/auth/login`,
        data
      );
      setUser({
        email: data.email,
        password: data.password,
      });
      // Salva no armazenamento local os dados do usuário.
      // Pensar se mantemos ou não o token.
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/home");
    } catch (err) {
      return err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
