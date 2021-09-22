import { useState } from 'react';

export const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.acess_token
  };
  
  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.access_token);
  };
  
  return {
    setToken: saveToken,
    token
  }
}