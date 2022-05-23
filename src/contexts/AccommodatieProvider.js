import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import * as accommodatiesApi from '../api/accommodaties';

export const AccommodatieContext = createContext();
export const useAccos = () => useContext(AccommodatieContext);

export const useAccomodaties = () => {
  const {
    refreshAccommodaties,
    createAccommodatie,
    updateAccommodatie,
    deleteAccommodatie,
  } = useAccos();
  return (
    refreshAccommodaties,
    createAccommodatie,
    updateAccommodatie,
    deleteAccommodatie
  );
};

export const AccommodatieProvider = ({ children }) => {
  const [initialLoad, setInitialLoad] = useState(false);
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [amountPeople, setAmountPeople] = useState(1);
  const [selectedKamers, setSelectedKamers] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState([50, 500]);
  const [selectedScore, setSelectedScore] = useState(null);

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const [zoekResultaat, setZoekResultaat] = useState([]);
  const [zoekResFiltered, setZoekResFiltered] = useState([]);

  const refreshAccommodaties = useCallback(async () => {
    try {
      setError('');
      setLoading(true);
      const data = await accommodatiesApi.getAllAccommodaties();
      setZoekResultaat(data.data);
      setZoekResFiltered(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      refreshAccommodaties();
      setInitialLoad(true);
    }
  }, [initialLoad, refreshAccommodaties]);

  const createAccommodatie = useCallback(
    async ({
      id,
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
          id,
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
        await refreshAccommodaties();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [refreshAccommodaties]
  );

  const updateAccommodatie = useCallback(
    async (id) => {
      setLoading(true);
      setError('');
      try {
        await accommodatiesApi.updateAccommodatie(id);
        refreshAccommodaties();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [refreshAccommodaties]
  );

  const deleteAccommodatie = useCallback(
    async (id) => {
      setLoading(true);
      setError('');
      try {
        await accommodatiesApi.deleteAccommodatie(id);
        refreshAccommodaties();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [refreshAccommodaties]
  );

  const value = useMemo(
    () => ({
      city,
      setCity,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      amountPeople,
      setAmountPeople,
      selectedKamers,
      setSelectedKamers,
      selectedPrice,
      setSelectedPrice,
      selectedScore,
      setSelectedScore,
      error,
      setError,
      loading,
      setLoading,
      zoekResultaat,
      setZoekResultaat,
      zoekResFiltered,
      setZoekResFiltered,
      refreshAccommodaties,
      createAccommodatie,
      updateAccommodatie,
      deleteAccommodatie,
    }),
    [
      city,
      setCity,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      amountPeople,
      setAmountPeople,
      selectedKamers,
      setSelectedKamers,
      selectedPrice,
      setSelectedPrice,
      selectedScore,
      setSelectedScore,
      error,
      setError,
      loading,
      setLoading,
      zoekResultaat,
      setZoekResultaat,
      zoekResFiltered,
      setZoekResFiltered,
      refreshAccommodaties,
      createAccommodatie,
      updateAccommodatie,
      deleteAccommodatie,
    ]
  );

  return (
    <AccommodatieContext.Provider value={value}>
      {children}
    </AccommodatieContext.Provider>
  );
};
