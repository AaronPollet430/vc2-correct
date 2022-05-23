import { axios } from '.';

export const login = async (email, password) => {
  const { data } = await axios.post('/gebruikers/login', {
    email,
    password,
  });
  return data;
};

export const registreer = async ({
  achternaam,
  voornaam,
  email,
  password,
  telefoonnummer,
}) => {
  const { data } = await axios.post(`/gebruikers/registreer`, {
    achternaam,
    voornaam,
    email,
    password,
    telefoonnummer,
  });
  return data;
};

export const getUserById = async (id) => {
  const { data } = await axios.get(`users/${id}`);
  return data;
};

export const getAccommodatiesVerhuurder = async (id) => {
  const { data } = await axios.get(`users/${id}/panden`);
  return data;
};
