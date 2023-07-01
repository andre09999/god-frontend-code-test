import React, { createContext } from 'react';
type type = "light" | "dark";
interface CurrentUserContextType {
    username: string;
  }

const MyContext = createContext<CurrentUserContextType| any>(null);

export default MyContext;