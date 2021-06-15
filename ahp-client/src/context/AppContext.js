import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const user = sessionStorage.getItem('user');

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
  
    const [horse, setHorse] = useState(null);
    const [organization, setOrganization] = useState(null);
    const [horses, setHorses] = useState([]);
    const [organizations, setOrganizarions] = useState([]);
    
    const [adoptitonRequest, setAdoptionRequest] = useState([]);

  const fetchCurrentUser = () => {
    axios
      .get(`/api/user/me`, {
        withCredentials: true
      })
      .then(({ data }) => {
        setCurrentUser(data);
        sessionStorage.setItem('user', JSON.stringify(data));
      })
      .catch((error) => {
        console.log(
          'No user in session',
          error.message
        );
      });
  };

  useEffect(() => {
    if (user && !currentUser) {
      fetchCurrentUser();
    }
  }, [user, currentUser]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        fetchCurrentUser,
        loading,
        setLoading,
        search,
        setSearch,
        horse, 
        setHorse,
        horses, 
        setHorses,
        organization, 
        setOrganization,
        organizations, 
        setOrganizarions,
        adoptitonRequest, 
        setAdoptionRequest
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
