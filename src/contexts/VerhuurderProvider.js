import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import * as accommodatiesApi from '../api/accommodaties';
import * as usersApi from '../api/users';
import * as boekingApi from '../api/boeking';

export const VerhuurderContext = createContext();
export const useVerhuurderContext = () => useContext(VerhuurderContext);

export const useVerhuurder = () => {
  const {
    getAccommodatiesVerhuurder,
    createAccommodatie,
    updateAccommodatie,
    deleteAccommodatie,
  } = useVerhuurderContext();
  return (
    getAccommodatiesVerhuurder,
    createAccommodatie,
    updateAccommodatie,
    deleteAccommodatie
  );
};

export const VerhuurderProvider = ({ children }) => {
  const [initialLoad, setInitialLoad] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [verhuurderAccos, setVerhuurderAccos] = useState([]);
  const [boekingen, setBoekingen] = useState([]);

  const getAccommodatiesVerhuurder = useCallback(async (id) => {
    try {
      setError('');
      setLoading(true);
      const accommodaties = await accommodatiesApi.getAllAccommodaties();
      const verhuurder = await usersApi.getUserById(id);
      if (id === accommodaties.owner_id) {
        setVerhuurderAccos(accommodaties.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getBoekingenAccommodatie = useCallback(
    async (boekingId, verhuurderId) => {
      try {
        setError('');
        setLoading(true);
        const boekingen = await boekingApi.getBookingById(boekingId);
        const verhuurder = await usersApi.getUserById(verhuurderId);
        if (verhuurder === boekingen) {
          setBoekingen(boekingen);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [getAccommodatiesVerhuurder]
  );

  useEffect(() => {
    if (!initialLoad) {
      getAccommodatiesVerhuurder();
      setInitialLoad(true);
    }
  }, [initialLoad, getAccommodatiesVerhuurder]);

  const createAccommodatie = useCallback(
    async ({
      name,
      description,
      hasPool,
      hasParking,
      hasWifi,
      petAllowed,
      hasTV,
      type,
      pricePerDay,
      nrOfBedrooms,
      nrOfBathrooms,
      nrOfBeds,
      maxPeople,
      deposit,
      thumbnail,
      address_id,
      owner_id,
      schoonmaakkosten,
    }) => {
      setError('');
      setLoading(true);
      try {
        await accommodatiesApi.createAccommodatie({
          name,
          description,
          hasPool,
          hasParking,
          hasWifi,
          petAllowed,
          hasTV,
          type,
          pricePerDay,
          nrOfBedrooms,
          nrOfBathrooms,
          nrOfBeds,
          maxPeople,
          deposit,
          thumbnail,
          address_id,
          owner_id,
          schoonmaakkosten,
        });
        await getAccommodatiesVerhuurder();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [getAccommodatiesVerhuurder]
  );

  const updateAccommodatie = useCallback(
    async (id) => {
      setLoading(true);
      setError('');
      try {
        await accommodatiesApi.updateAccommodatie(id);
        getAccommodatiesVerhuurder();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [getAccommodatiesVerhuurder]
  );

  const deleteAccommodatie = useCallback(
    async (id) => {
      setLoading(true);
      setError('');
      try {
        await accommodatiesApi.deleteAccommodatie(id);
        getAccommodatiesVerhuurder();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [getAccommodatiesVerhuurder]
  );

  const value = useMemo(
    () => ({
      setError,
      loading,
      setLoading,
      getAccommodatiesVerhuurder,
      createAccommodatie,
      updateAccommodatie,
      deleteAccommodatie,
    }),
    [
      setError,
      loading,
      setLoading,
      getAccommodatiesVerhuurder,
      createAccommodatie,
      updateAccommodatie,
      deleteAccommodatie,
    ]
  );

  return (
    <VerhuurderContext.Provider value={value}>
      {children}
    </VerhuurderContext.Provider>
  );
};
