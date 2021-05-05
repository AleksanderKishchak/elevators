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

  const updateApartmentData = useCallback((entranceId, apartmentId, bulkData) => {
    setApartmentsData((prev) => {
      const newApartments = prev[entranceId].data.map((apartment) => {
        if (apartment.id !== apartmentId) return apartment;

        return bulkData;
      });

      return {
        ...prev,
        [entranceId]: {
          data: newApartments,
        },
      };
    });
  }, [setApartmentsData]);

  return {
    apartmentsData,
    fetchApartments,
    updateApartmentData,
  };
};
