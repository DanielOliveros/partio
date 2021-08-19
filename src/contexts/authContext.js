import React, {
  createContext,
  useState,
} from 'react';
import { authMethods } from '@/firebase/authmethods';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(window.localStorage.token);
  const handleSignin = () => {
    authMethods.signIn(inputs.email, inputs.password, setErrors, setToken);
  };
  const handleSignOut = () => {
    authMethods.signOut(setErrors, setToken);
  };

  const handleSignUp = (
    {
      email,
      password,
    },
  ) => {
    authMethods.signUp(
      email,
      password,
      setErrors,
    );
  };

  return (
    <AuthContext.Provider value={{
      handleSignin,
      handleSignUp,
      handleSignOut,
      inputs,
      setInputs,
      errors,
      setErrors,
      token,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};
