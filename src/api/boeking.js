import axios from '.';

export const getAllBookings = async () => {
  const { data } = await axios.get('/bookings');
  return data;
};
export const getBookingById = async (id) => {
  const { data } = await axios.get(`/bookings/${id}`);
  return data;
};
export const createBooking = async ({
  id,
  startDate,
  endDate,
  gebruker_id,
  vakantiehuis_id,
}) => {
  const { data } = await axios.post({
    url: `/bookings/${id}`,
    data: {
      startDate,
      endDate,
      gebruker_id,
      vakantiehuis_id,
    },
  });
  return data;
};
export const deteleteBookingById = async (id) => {
  await axios.delete(`/bookings/${id}`);
};
export const updateBookingById = async (
  id,
  startDate,
  endDate,
  gebruker_id,
  vakantiehuis_id
) => {
  const { data } = await axios.put({
    url: `/bookings/${id}`,
    data: {
      startDate,
      endDate,
      gebruker_id,
      vakantiehuis_id,
    },
  });
  return data;
};
