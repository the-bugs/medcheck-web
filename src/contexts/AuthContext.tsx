import axios from "axios";
import React, { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type UserType = {
  nome: string;
  email: string;
  senha: string;
  tipo: string;
};

type AuthContextType = {
  user: UserType | null;
  login: (username: string, senha: string) => void;
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
  const [user, setUser] = useState<UserType | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, senha: string) => {
    const port = "http://localhost:3001/";
    try {
      const response = await axios.post(
        `${port}auth/login`,
        {
          email,
          senha,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type",
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(user);
      setUser(response.data.user);
      // Salva no armazenamento local os dados do usuário.
      // Pensar se mantemos ou não o token.
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      navigate("/");
    } catch (err) {
      console.log(err);
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
