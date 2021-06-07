import useAuthContext from '@/hooks/useAuthContext';
import { useEffect } from 'react';

function Logout() {
  const { handleSignOut } = useAuthContext();
  useEffect(() => handleSignOut());
  return null;
}

export default Logout;
