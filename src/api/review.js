import axios from '.';

export const getAllReviewsByHomes = async (id) => {
  const { data } = await axios.get(`/reviews/${id}`, {
    params: {
      limit: 100,
      offset: 0,
    },
  });
  return data;
};

export const createReview = async (
  id,
  title,
  description,
  user_id,
  home_id
) => {
  const { data } = await axios.post('/', {
    id,
    title,
    description,
    user_id,
    home_id,
  });
  return data;
};

export const deleteReviewById = async (id) => {
  await axios.delete(`/reviews/${id}`);
};

export const updateReviewById = async (
  id,
  title,
  description,
  user_id,
  home_id
) => {
  const { data } = await axios.put({
    url: `/reviews/${id}`,
    data: {
      title,
      description,
      user_id,
      home_id,
    },
  });
  return data;
};
