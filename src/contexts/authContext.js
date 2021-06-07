import React, {
  createContext,
  useState,
} from 'react';
import { authMethods } from '@/firebase/authmethods';
import PropTypes from 'prop-types';

// const AUTH_OBJ = 'AUTH_OBJ';

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

  return (
    <AuthContext.Provider value={{
      handleSignin,
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
