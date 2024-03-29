import React, { createContext, useContext, useEffect, useState } from 'react';
import useStorage from '~/hooks/useStorage';
import { translate } from '~/i18n';
import { RegisterFormType } from '~/screens/public/Register';
import { ResponseError } from '~/types/Api';
import { Alert } from '~/util/Alert';
import api from '~/util/api';

type LoginArgs = {
  email: string;
  password: string;
  type: 'admin' | 'client';
  restaurantId: number;
};

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  type: 'client' | 'admin';
  phone: string;
  email: string;
  restaurantId: number;
  invitationCode?: string;
  referralCode: string;
  createdAt: string;
  updatedAt: string;
};

type ContextProps = {
  user?: UserType;
  token?: string;
  userLoaded: boolean;
  login: (args: LoginArgs) => Promise<boolean>;
  register: (args: RegisterFormType) => Promise<boolean>;
  logout: () => void;
  setInvitationCode: (invitationCode: string) => void;
};

const AuthContext = createContext<ContextProps>({
  user: undefined,
  token: undefined,
  userLoaded: false,
  login: async () => false,
  register: async () => false,
  logout: () => undefined,
  setInvitationCode: () => undefined,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserType>();
  const [token, setToken] = useState<string>();
  const [invitationCode, setInvitationCode] = useState<string>();
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
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  };

  function restoreToken(token: string = '') {
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
      const { data } = response as ResponseError;

      Alert.error(translate(data.message, 'UNHANDLED_ERROR'));

      return false;
    }
  };

  const register = async (user: RegisterFormType) => {
    try {
      const { data } = await api.post<{ user: any; token: string }>(
        'auth/register',
        { ...user, invitationCode },
      );

      setUser(data.user);
      setToken(data.token);
      setAuthorization(data.token);

      Alert.success(translate('userCreated'), undefined, 'light');

      return true;
    } catch ({ response }) {
      const { data } = response as ResponseError;

      Alert.error(translate(data.message, 'UNHANDLED_ERROR'));

      return false;
    }
  };

  const logout = () => {
    setUser(undefined);
    setToken(undefined);
    removeStorageUser();
    removeStorageToken();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        userLoaded,
        login,
        logout,
        register,
        setInvitationCode,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
