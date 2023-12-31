import { useState, useEffect } from 'react';

export const useUserOwner = () => {
  const [userOwner, setUserOwner] = useState<string | null>(localStorage.getItem('userLoggedIn'));

  useEffect(() => {
    const storedUser = localStorage.getItem('userLoggedIn');
    setUserOwner(storedUser);
  }, []);

  return userOwner;
};
