import { useState, useEffect } from 'react';

export const useGuestId = () => {
  const [guestId, setGuestId] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem('guestId') || generateGuestId();
    setGuestId(id);
    localStorage.setItem('guestId', id);
  }, []);

  return guestId;
};

const generateGuestId = () => {
  return 'guest-' + Math.random().toString(36).substr(2, 9);
};