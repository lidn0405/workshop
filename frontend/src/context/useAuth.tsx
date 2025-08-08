import { useContext } from 'react';
import { AuthContext, type AuthContextType } from '../context/AuthContext'; // Import from the context file

// Create a custom hook for easy consumption of the context
export function useAuth() {
  const context = useContext<AuthContextType | null>(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}