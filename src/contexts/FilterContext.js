import React, { createContext } from 'react';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  // const [selectedKamers, setSelectedKamers] = useState(1);
  // const [selectedPrice, setSelectedPrice] = useState([50, 500]);
  // const [selectedScore, setSelectedScore] = useState(null);
  // const [city, setCity] = useState('');
  // const [checkInDate, setCheckInDate] = useState(null);
  // const [checkOutDate, setCheckOutDate] = useState(null);
  // const [amountPeople, setAmountPeople] = useState(0);

  // const [accommodaties, setAccommodaties] = useState([
  //   { id: 0, checked: false, label: 'Huis' },
  //   { id: 1, checked: false, label: 'Appartement' },
  //   { id: 2, checked: false, label: 'Loft' },
  //   { id: 3, checked: false, label: 'Bed & Breakfast' },
  //   { id: 4, checked: false, label: 'Privé kamer' },
  //   { id: 5, checked: false, label: 'Gedeelde kamer' },
  //   { id: 8, checked: false, label: 'villa' },
  // ]);

  // const [faciliteiten, setFaciliteiten] = useState([
  //   { id: 0, checked: false, label: 'zwembad' },
  //   { id: 1, checked: false, label: 'parking' },
  //   { id: 2, checked: false, label: 'wifi' },
  //   { id: 3, checked: false, label: 'strand' },
  //   { id: 4, checked: false, label: 'auto verhuur' },
  // ]);

  // const changeCity = (value) => {
  //   setCity(value);
  // };

  // const changeStartDate = (value) => {
  //   setCheckInDate(value);
  // };

  // const changeEndDate = (value) => {
  //   setCheckOutDate(value);
  // };

  // const changeAmountPeople = (value) => {
  //   setAmountPeople(value);
  // };

  // const handleChangeKamers = (e) => {
  //   setSelectedKamers(e);
  // };
  // const handleChangePrice = (event, value) => {
  //   const [minPrice, maxPrice] = value;
  //   setSelectedPrice([minPrice, maxPrice]);
  // };

  // const handleSelectScore = (event, value) =>
  //   !value ? null : setSelectedScore(value);

  // const handleChangeAccommodatieTypeChecked = (id) => {
  //   const accoStateList = accommodaties;
  //   const changeCheckedAccommodaties = accoStateList.find((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setAccommodaties(changeCheckedAccommodaties);
  // };
  // const handleChangeFaciliteitenChecked = (id) => {
  //   const faciliteitenStateList = faciliteiten;
  //   const changeCheckedFaciliteiten = faciliteitenStateList.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setFaciliteiten(changeCheckedFaciliteiten);
  // };

  // const handleDecrement = () => {
  //   if (amountPeople > 1) setAmountPeople((prevCount) => prevCount - 1);
  //   setAmountPeople(amountPeople - 1);
  // };
  // const handleIncrement = () => {
  //   if (amountPeople < 20) setAmountPeople((prevCount) => prevCount + 1);
  //   setAmountPeople(amountPeople + 1);
  // };

  return (
    <>
      <FilterContext.Provider
        value={
          {
            // selectedKamers,
            // selectedPrice,
            // selectedScore,
            // city,
            // checkInDate,
            // checkOutDate,
            // amountPeople,
            // accommodaties,
            // faciliteiten,
            // changeCity,
            // changeStartDate,
            // changeEndDate,
            // changeAmountPeople,
            // handleChangeKamers,
            // handleChangePrice,
            // handleSelectScore,
            // handleChangeAccommodatieTypeChecked,
            // handleChangeFaciliteitenChecked,
            // handleDecrement,
            // handleIncrement,
          }
        }>
        {children}
      </FilterContext.Provider>
    </>
  );
}

export default FilterContext;
