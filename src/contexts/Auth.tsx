import React, { createContext, useContext, useEffect, useState } from 'react';
import useStorage from '~/hooks/useStorage';
import api from '~/util/api';

type LoginArgs = {
  email: string;
  password: string;
  type: 'admin' | 'client';
  restaurantId: number;
};

type ContextProps = {
  user?: any;
  token?: string;
  userLoaded: boolean;
  login: (args: LoginArgs) => void;
};

const AuthContext = createContext<ContextProps>({
  user: undefined,
  token: undefined,
  userLoaded: false,
  login: () => undefined,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<string>();
  const [userLoaded, setUserLoaded] = useState<boolean>(false);

  const { setStorage: setStorageUser, removeStorage: removeStorageUser } =
    useStorage<any>('@fidelitas:user', setUser);

  const { setStorage: setStorageToken, removeStorage: removeStorageToken } =
    useStorage<string>('@fidelitas:token', restoreToken);

  useEffect(() => {
    setStorageUser(user);
  }, [setStorageUser, user]);

  useEffect(() => {
    setStorageToken(token);
  }, [setStorageToken, token]);

  const setAuthorization = (token: string) => {
    api.defaults.headers.Authorization = `Bearer ${token}`;

    console.log(`Bearer ${token}`);
  };

  function restoreToken(token: string = '') {
    console.log('aaa');
    setAuthorization(token);
    setToken(token);
    setUserLoaded(true);
  }

  const login = async (args: LoginArgs) => {
    try {
      const { data } = await api.post<{ user: any; token: string }>(
        'auth/login',
        args,
      );

      setUser(data.user);
      setToken(data.token);
      setAuthorization(data.token);

      return true;
    } catch ({ response }) {
      const { data } = response as {
        data: {
          error: string;
          message: string;
          statusCode: number;
        };
      };

      console.log(data);
      return false;
    }
  };

  const logout = () => {
    setUser(undefined);
    setToken(undefined);
    removeStorageUser();
    removeStorageToken();
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     logout();
  //   }, 1000);
  // }, []);

  return (
    <AuthContext.Provider value={{ user, token, userLoaded, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
