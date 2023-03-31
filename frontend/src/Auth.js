import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import WorldLoader from './components/WorldLoader';
import { auth } from './firebase';


export const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
        });
      }, []);

      if (loading) {
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80vh',
            }}
          >
            <WorldLoader/>
          </div>
        );
      }
    
      return (
        <AuthContext.Provider
          value={{
            currentUser,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
};