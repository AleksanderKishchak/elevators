import { useState, useCallback } from 'react';
import { getApartments } from '../api';

export const useApartmentsData = () => {
  const [apartmentsData, setApartmentsData] = useState({});

  const fetchApartments = useCallback((entranceId) => {
    setApartmentsData((state) => ({
      ...state,
      [entranceId]: undefined,
    }));

    getApartments(entranceId)
      .then((response) => {
        setApartmentsData((state) => ({
          ...state,
          [entranceId]: {
            data: response,
          },
        }));
      })
      .catch((error) => {
        setApartmentsData((state) => ({
          ...state,
          [entranceId]: {
            error,
          },
        }));
      });
  }, []);

  return {
    apartmentsData,
    fetchApartments,
  };
};
