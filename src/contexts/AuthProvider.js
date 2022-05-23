import React, {
  useEffect,
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import * as usersApi from '../api/users';
import * as api from '../api';
import config from '../config.json';

const JWT_TOKEN_KEY = config.token_key;
const AuthContext = createContext();

function parseJWT(token) {
  if (!token) return {};
  const base64Url = token.split('.')[1];
  const payload = Buffer.from(base64Url, 'base64');
  const jsonPayload = payload.toString('ascii');
  return JSON.parse(jsonPayload);
}

function parseExp(exp) {
  if (!exp) return null;
  if (typeof exp !== 'number') exp = Number(exp);
  if (isNaN(exp)) return null;
  return new Date(exp * 1000);
}

const useAuth = () => useContext(AuthContext);

export const useSession = () => {
  const {
    loading,
    error,
    token,
    user,
    ready,
    hasRole,
    login,
    logout,
    registreer,
    getAccommodatiesVerhuurder,
  } = useAuth();
  return {
    loading,
    error,
    token,
    user,
    ready,
    isAuthed: Boolean(token),
    hasRole,
    login,
    logout,
    registreer,
    getAccommodatiesVerhuurder,
  };
};

export const AuthProvider = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
  const [user, setUser] = useState(null);

  const setSession = useCallback(async (token, user) => {
    const { exp, userId } = parseJWT(token);
    const expiry = parseExp(exp);
    const stillValid = expiry >= new Date();

    if (stillValid) {
      localStorage.setItem(JWT_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(JWT_TOKEN_KEY);
      token = null;
    }
    api.setAuthToken(token);
    setToken(token);
    setReady(token && stillValid);

    if (!user && stillValid) {
      user = await useCallback(() => {
        usersApi.getUserById(userId);
      });
      setUser(user);
    }
  }, []);

  useEffect(() => {
    setSession(token);
  }, [token, setSession]);

  const login = useCallback(
    async (email, password) => {
      try {
        setLoading(true);
        setError(null);
        const { token, user } = await usersApi.login(email, password);
        await setSession(token, user);
        return true;
      } catch (error) {
        setError('Login failed, try again');
        return false;
      } finally {
        setLoading(false);
      }
    },
    [setSession]
  );

  const registreer = useCallback(
    async (data) => {
      try {
        setLoading(true);
        setError(null);
        const { token, user } = await usersApi.registreer(data);
        await setSession(token, user);
        return true;
      } catch (error) {
        setError('registration failed, try again');
        return false;
      } finally {
        setLoading(false);
      }
    },
    [setSession]
  );

  const logout = useCallback(async () => {
    await setSession(null, null);
  }, []);

  const hasRole = useCallback(
    (role) => {
      if (!user) return false;
      return user.roles.includes(role);
    },
    [user]
  );

  const getAccommodatiesVerhuurder = useCallback(async (id) => {
    const { data } = await usersApi.getAccommodatiesVerhuurder(id);
    return data;
  });

  const value = useMemo(
    () => ({
      loading,
      error,
      token,
      user,
      ready,
      login,
      logout,
      registreer,
      hasRole,
      getAccommodatiesVerhuurder,
    }),
    [
      loading,
      error,
      token,
      user,
      ready,
      login,
      logout,
      registreer,
      hasRole,
      getAccommodatiesVerhuurder,
    ]
  );

  return (
    <AuthContext.Provider value={{ value }}>{children}</AuthContext.Provider>
  );
};
