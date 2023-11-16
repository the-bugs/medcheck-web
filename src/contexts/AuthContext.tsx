import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  user_id: string;
  tipo: string;
  id_externo: string;
}

type User = {
  id?: string;
  email: string;
  password: string;
  tipo?: string;
  tipoId?: string 
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
        `${process.env.REACT_APP_API_HOST}/auth/login`,
        {
          email: data.email,
          senha: data.password
        }
      );
      const token = response.data.access_token;
      const userDecoded = jwtDecode(token) as JwtPayload;
      
      setUser({
        email: data.email,
        password: data.password,
        tipo: userDecoded.tipo,
        id: userDecoded.user_id,
        tipoId: userDecoded.id_externo
      });
      // Salva no armazenamento local os dados do usuário.
      // Pensar se mantemos ou não o token.
      localStorage.setItem("authToken", token);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/home");
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
