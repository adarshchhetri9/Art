import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({});

import React from "react";

export default function UsercontextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
