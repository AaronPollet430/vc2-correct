import axios from '.';

export const getPing = async () => {
  const { data } = await axios.get('rol/ping');
  return data;
};

export const getVersion = async () => {
  const { data } = await axios.get('rol/version');
  return data;
};
