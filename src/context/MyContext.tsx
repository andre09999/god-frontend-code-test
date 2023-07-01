import React, { createContext } from 'react';

interface CurrentUserContextType {
    user: string;
  }

const MyContext = createContext<CurrentUserContextType| any>(null);

export default MyContext;