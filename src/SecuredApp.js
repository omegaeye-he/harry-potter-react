import React from 'react';
import App from './App';
import {
  AuthProvider, 
  AuthService, 
  useAuth, 
} from 'react-oauth2-pkce'

const authService = new AuthService({ 
    clientId: '6f968db52cc6f4aa4dec', 
    clientSecret: '5156b0687624e4bf184ddd29a5aab9d38be7df07',
    provider: 'https://github.com/login/oauth',
    tokenEndpoint: `https://github.com/login/oauth/access_token`, 
    redirectUri: window.location.origin,
    scopes: ['openid'],
});

function SecuredApp() {
    const { authService } = useAuth(); 

    const login = async () => authService.authorize();
    const logout = async () => authService.logout(); 

    if (authService.isPending()) { 
      return <div>
        Loading...
        <button onClick={() => { logout(); login(); }}>Reset</button>
      </div>
    }

    if (!authService.isAuthenticated()) { 
      return (
        <div>
          <p>Not Logged in yet</p>
          <button onClick={login}>Login</button>
        </div>
      )
    }

    const token = authService.getAuthTokens(); 
    return ( 
      <div>
        <button onClick={logout}>Logout</button>
        <App />
      </div>
    );
  }
  
function WrappedSecuredApp() {
  return (
    <AuthProvider authService={authService} > 
      <SecuredApp />
    </AuthProvider>
  );
}

export default WrappedSecuredApp;