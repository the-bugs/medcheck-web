import React from "react";

import { AuthContextProvider } from "./AuthContext";

type PropsGlobalContext = {
  children: React.ReactNode;
};
const GlobalContext: React.FC<PropsGlobalContext> = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default GlobalContext;
