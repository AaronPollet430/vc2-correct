import { axios } from '.';

export const getAllAccommodaties = async () => {
  const { data } = await axios.get(`/homes`, {
    params: {
      limit: 10,
      offset: 0,
    },
  });
  return data;
};

export const createAccommodatie = async ({
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
  const { data } = await axios.post({
    url: '/homes',
    data: {
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
    },
  });
  return data;
};

export const updateAccommodatie = async (id) => {
  await axios.put(`/homes/${id}`);
};

export const deleteAccommodatie = async (id) => {
  await axios.delete(`/homes/${id}`);
};
