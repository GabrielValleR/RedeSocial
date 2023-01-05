import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '~/services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  username: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  error: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const APP_KEY = '#HOLOFOT#';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [error, setError] = useState('');
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    try {
      const response = {
        data: {
          token: 'fake-token',
          user: {
            id: 'c7798d48-1c54-4978-91b1-988873f1b4ec',
            name: 'Thiago Vieira da Paz',
            username: 'th39',
            avatar: 'https://avatars.githubusercontent.com/u/20052351?v=4',
            email: 'thiago.paz@gethash.com.br',
          },
        },
      }; //await api.post('/sessions', { email, password });
      console.log(email, password);

      if (response.data) {
        const { token, user } = response.data;

        await AsyncStorage.multiSet([
          [`${APP_KEY}:token`, token],
          [`${APP_KEY}:user`, JSON.stringify(user)],
        ]);

        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        setData({ token, user });
      }
    } catch (err) {
      setError('@auth/failed');

      console.log(err);
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([`${APP_KEY}:token`, `${APP_KEY}:user`]);
    setData({} as AuthState);
  }, []);

  useEffect(() => {
    async function loadData() {
      const [token, user] = await AsyncStorage.multiGet([
        `${APP_KEY}:token`,
        `${APP_KEY}:user`,
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.common.Authorization = `Bearer ${token[1]}`;
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ error, loading, user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
