import { createContext, useEffect, useState, type ReactNode } from 'react';
import { loginUser, signupUser } from '../api/authenticationApi.tsx';

// Credentials sent
interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupCredentials extends LoginCredentials {
  username: string;
}

// Context Type
interface AuthContextType {
  token: string | null;
  username: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignupCredentials) => Promise<void>;
  logout: () => void;
}

// Type AtuhContext or null
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

// Create the Provider component
function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('authToken'));
  const [username, setUsername] = useState<string | null>(() => localStorage.getItem('username'))

  useEffect(() => {
    if (token && username) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
    }
  }, [token]);

  // Auth login function using api
  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await loginUser(credentials);
      if (response && response.token && response.username) {
        setToken(response.token);
        setUsername(response.username);
      }
    } catch (error) {
      console.error("Login failed in AuthContext", error);
      throw error;
    }
  };

  // Auth signup function using api
  const signup = async (credentials: SignupCredentials) => {
    try {
      // The signupUser function handles the API call
      await signupUser(credentials);
    } catch (error) {
      console.error("Signup failed in AuthContext", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
  };

  const value = { token, username, login, signup, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export {
  AuthProvider,
  AuthContext,
}

export type {
  AuthContextType,
}