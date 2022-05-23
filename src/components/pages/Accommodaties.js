import React, { useState, useCallback, useEffect, Fragment } from 'react';
import '../CSS/Accommodaties.css';
import Filter from '../layout/Filter';
import List from '../layout/List';
import Searchbar from '../layout/SearchbarAcco';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';
// import FilterContext from '../contexts/FilterContext';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { useSearchContext } from '../contexts/search-context';

const Accommodaties = ({ location }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams(window.location.search);
  const startDatum = format(
    new Date(searchParams.get('startDate')),
    'yyyy-MM-dd'
  );
  const endDatum = format(new Date(searchParams.get('endDate')), 'yyyy-MM-dd');
  const [city, setCity] = useState(searchParams.get('city'));
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(endDatum);
  const [amountPeople, setAmountPeople] = useState(searchParams.get('ppl'));
  const [selectedKamers, setSelectedKamers] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState([50, 500]);
  const [selectedScore, setSelectedScore] = useState(null);
  const [zoekResultaat, setZoekResultaat] = useState([]);
  const [zoekResFiltered, setZoekResFiltered] = useState([]);

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const [accommodaties, setAccommodaties] = useState([
    { id: 0, checked: false, label: `${t('Filter.accoTypeLabels.huis')}` },
    {
      id: 1,
      checked: false,
      label: `${t('Filter.accoTypeLabels.appartement')}`,
    },
    { id: 2, checked: false, label: `${t('Filter.accoTypeLabels.loft')}` },
    { id: 3, checked: false, label: `${t('Filter.accoTypeLabels.b&b')}` },
    { id: 4, checked: false, label: `${t('Filter.accoTypeLabels.privé')}` },
    { id: 5, checked: false, label: `${t('Filter.accoTypeLabels.gedeeld')}` },
    { id: 8, checked: false, label: `${t('Filter.accoTypeLabels.villa')}` },
  ]);

  const [faciliteiten, setFaciliteiten] = useState([
    { id: 0, checked: false, label: `${t('Filter.faciliLabels.zwembad')}` },
    { id: 1, checked: false, label: `${t('Filter.faciliLabels.parking')}` },
    { id: 2, checked: false, label: `${t('Filter.faciliLabels.wifi')}` },
    { id: 3, checked: false, label: `${t('Filter.faciliLabels.strand')}` },
    { id: 4, checked: false, label: `${t('Filter.faciliLabels.auto')}` },
  ]);

  const fetchAccommodaties = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get('http://localhost:9000/api/homes', {
        headers: { authorization: 'Bearer YOUR_JWT_TOKEN_HERE' },
      });
      console.log(response.data.data);
      setZoekResultaat(response.data.data);
      setZoekResFiltered(response.data.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(city, startDate, endDate, amountPeople);

  const changeCity = (value) => {
    setCity(value);
  };

  const changeStartDate = (value) => {
    setStartDate(value);
  };

  const changeEndDate = (value) => {
    setEndDate(value);
  };

  const changeAmountPeople = (value) => {
    setAmountPeople(value);
  };

  const handleChangeKamers = (e) => {
    setSelectedKamers(e);
  };
  const handleChangePrice = (event, value) => {
    const [minPrice, maxPrice] = value;
    setSelectedPrice([minPrice, maxPrice]);
  };

  const handleSelectScore = (event, value) =>
    !value ? null : setSelectedScore(value);

  const handleChangeAccommodatieTypeChecked = (id) => {
    const accoStateList = accommodaties;
    const changeCheckedAccommodaties = accoStateList.find((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAccommodaties(changeCheckedAccommodaties);
  };
  const handleChangeFaciliteitenChecked = (id) => {
    const faciliteitenStateList = faciliteiten;
    const changeCheckedFaciliteiten = faciliteitenStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFaciliteiten(changeCheckedFaciliteiten);
  };

  const applyFilters = useCallback(() => {
    let updatedList = zoekResultaat;
    // kamer filter
    if (selectedKamers) {
      updatedList = updatedList.filter(
        (item) => parseInt(selectedKamers) >= parseInt(item.nrOfBedrooms)
      );
    }

    //prijs / nacht filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    // console.log('min price: ' + minPrice + ' maxPrice: ' + maxPrice);
    updatedList = updatedList.filter(
      (item) => item.pricePerDay >= minPrice && item.pricePerDay <= maxPrice
    );

    // //gastenscore filter
    // console.log('selectedScore' + selectedScore);
    // if (selectedScore) {
    //   updatedList = updatedList.filter((item) => item.rating >= selectedScore);
    // }

    // //accommodiatietype filter
    // const accosChecked = accommodaties
    //   .filter((item) => item.checked)
    //   .map((item) => item.label.toLowerCase());
    // if (accosChecked.length) {
    //   updatedList = updatedList.filter((item) =>
    //     accosChecked.includes(item.accommodatieType)
    //   );
    // }

    // // faciliteiten filter
    // const faciliteitenChecked = faciliteiten
    //   .filter((item) => item.checked)
    //   .map((item) => item.label.toLowerCase());
    // if (faciliteiten.length) {
    //   updatedList = updatedList.filter((item) =>
    //     faciliteitenChecked.includes(item.faciliteiten)
    //   );
    // }

    // bestemming filter
    // if (city) {
    //   updatedList = updatedList.filter((item) =>
    //     item.toLowerCase().inlcudes(city)
    //   );
    // }

    // // startDate filter
    // if (startDate)
    //   updatedList = updatedList.filter(
    //     (item) => item.booking.startDate === startDate
    //   );

    // //amount people filter_wrappers
    // if (amountPeople) {
    //   updatedList = updatedList.filter(
    //     (item) => parseInt(amountPeople) <= item.maxPeople
    //   );
    // }

    console.log(updatedList);
    setZoekResFiltered(updatedList);
  }, [
    city,
    startDate,
    endDate,
    selectedKamers,
    selectedPrice,
    selectedScore,
    amountPeople,
    accommodaties,
    faciliteiten,
  ]);

  useEffect(() => {
    fetchAccommodaties();
  }, []);

  useEffect(() => {
    //fetchAccommodaties();
    applyFilters();
  }, [
    t,
    selectedKamers,
    selectedPrice,
    selectedScore,
    faciliteiten,
    accommodaties,
    city,
    startDate,
    endDate,
  ]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <Fragment>
      <main className='accommodatieMain'>
        <div className='accommodatiePagina'>
          <Col lg='3' className='accommodatie_links'>
            <Filter
              selectedKamers={selectedKamers}
              changedKamers={handleChangeKamers}
              selectedPrice={selectedPrice}
              changedPrice={handleChangePrice}
              selectedScore={selectedScore}
              changedScore={handleSelectScore}
              accommodaties={accommodaties}
              changeCheckedAccommodaties={handleChangeAccommodatieTypeChecked}
              faciliteiten={faciliteiten}
              changeCheckedFaciliteiten={handleChangeFaciliteitenChecked}
            />
          </Col>
          <Col md='8' className='accommodatie_rechts'>
            <Searchbar
              city={city}
              startDate={new Date('07/07/2022')}
              endDate={'07/17/2022'}
              amountPeople={amountPeople}
              changeCity={changeCity}
              changeStartDate={changeStartDate}
              changeEndDate={changeEndDate}
              changeAmountPeople={changeAmountPeople}
            />
            <div className='accommodatie_rechts_lijst'>
              <p>
                {zoekResFiltered.length}
                {zoekResFiltered.length === 1
                  ? ` ${t('Filter.resultaat')}`
                  : ` ${t('Filter.resultaten')}`}
              </p>
              <List zoekResultaat={zoekResFiltered} />
            </div>
          </Col>
        </div>
      </main>
    </Fragment>
  );
};

export default Accommodaties;
