import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { loginUser, signupUser } from '../api/authenticationApi.tsx';

// Credentials sent
interface LoginCredentials {
  username: string;
  email: string;
  password: string;
}

// Context Type
interface AuthContextType {
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: LoginCredentials) => Promise<void>;
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

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [token]);

  // Login function uses your existing loginUser API call
  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await loginUser(credentials);
      if (response && response.token) {
        setToken(response.token);
      }
    } catch (error) {
      console.error("Login failed in AuthContext", error);
      throw error; // Re-throw error to be handled by the component
    }
  };

  // Signup function uses your existing signupUser API call
  const signup = async (credentials: LoginCredentials) => {
    try {
      // The signupUser function handles the API call
      await signupUser(credentials);
      // Typically, you don't log in the user immediately after signup,
      // but you could by calling login() here if your API returns a token on register.
    } catch (error) {
      console.error("Signup failed in AuthContext", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
  };

  const value = { token, login, signup, logout };

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