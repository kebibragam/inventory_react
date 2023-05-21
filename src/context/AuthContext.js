import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const addUser = (data) => {
    setUser(data);
  };
  const removeUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, addUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  );
};
//custom hook
export const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
