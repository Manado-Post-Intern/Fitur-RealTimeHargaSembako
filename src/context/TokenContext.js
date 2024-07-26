import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import {auth as promediaAuth, authConfig, authData} from '../api';

export const TokenContext = createContext();

export const TokenProvider = ({children}) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    axios
      .post(promediaAuth, authData, authConfig)
      .then(response => {
        const session = response.data.data.detail;
        setToken(session.access_token);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <TokenContext.Provider value={{token}}>{children}</TokenContext.Provider>
  );
};
