import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { loginUser, signupUser } from '../api/authenticationApi.tsx';

// Define the shape of your credentials and user data
interface LoginCredentials {
  username: string;
  password: string;
}

interface SignupCredentials extends LoginCredentials {
  email: string;
}

// Define the shape of the context value
interface AuthContextType {
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignupCredentials) => Promise<void>;
  logout: () => void;
}

// Create the context with a default value of null
const AuthContext = createContext<AuthContextType | null>(null);

// Define the props for the AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Create the Provider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('authToken'));

  // This effect syncs the token state with localStorage
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
  const signup = async (credentials: SignupCredentials) => {
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

// Create a custom hook for easy consumption of the context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}