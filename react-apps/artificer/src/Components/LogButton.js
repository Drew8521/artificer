import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const LogButton = () => {
  const { authState, authService } = useOktaAuth();

  const login = async () => {
    // Redirect to '/' after login
    authService.login('/');
    console.log("HEllo!")
  }

  const logout = async () => {
    // Redirect to '/' after logout
    authService.logout('/');
    console.log("GoodBye!")
  }

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return authState.isAuthenticated ?
    <button onClick={logout}>Logout</button> :
    <button onClick={login}>Login</button>;
};

export default LogButton;
