import axios from '.';

export const getAllAddresses = async () => {
  const { data } = await axios.get('/addresses/');
  return data;
};

export const createAddress = async (
  id,
  street,
  number,
  secondNumber,
  city,
  region,
  country
) => {
  const { data } = await axios.put({
    url: '/addresses/',
    data: {
      id,
      street,
      number,
      secondNumber,
      city,
      region,
      country,
    },
  });
  return data;
};

export const getAddressById = async (id) => {
  const { data } = await axios.get(`addresses/${id}`);
  return data;
};

export const updateAddressById = async (
  id,
  street,
  number,
  secondNumber,
  city,
  region,
  country
) => {
  const { data } = await axios.put({
    url: `/addresses/${id}`,
    data: {
      street,
      number,
      secondNumber,
      city,
      region,
      country,
    },
  });
  return data;
};
