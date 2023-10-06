import React, { createContext, useState } from 'react';

const CustomerContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Thanh' });

  return (
    <CustomerContext.Provider value={{ user }}>
      {children}
    </CustomerContext.Provider>
  );
};

export default UserProvider;
