import React, { Fragment } from 'react'; //{useContext} toevoegen
import '../CSS/Zoekresultaat.css';
import { Link } from 'react-router-dom';
import { IoHeartSharp, IoLocationOutline, IoStar } from 'react-icons/io5';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

export default React.memo(function ZoekResultaat({
  item: {
    id,
    name,
    description,
    hasPool,
    hasParking,
    hasWifi,
    petsAllowed,
    hasTV,
    type,
    pricePerDay,
    nrOfBedrooms,
    beds,
    nrOfBathrooms,
    maxPeople,
    thumbnail,
    rating,
    location,
    city,
  },
}) {
  const { t } = useTranslation();
  const beschrijvingFaciliteiten = `${maxPeople} ${t(
    'ZoekResultaat.gasten'
  )} - ${nrOfBedrooms} ${
    nrOfBedrooms === 1
      ? `${t('ZoekResultaat.kamer')}`
      : `${t('ZoekResultaat.kamers')}`
  } -  ${nrOfBathrooms} ${
    nrOfBathrooms === 1
      ? `${t('ZoekResultaat.badkamer')}`
      : `${t('ZoekResultaat.badkamers')}`
  } - ${type} `;
  return (
    // {path={`/api/homes/:${id}`}}
    <Fragment>
      <Link to={`/homes/detail/${id}`} style={{ textDecoration: 'none' }}>
        <Container className='zoekResultaat'>
          <Col className='zoekRes-img'>
            <img src={`./img/${id}/${thumbnail}`} alt='thumbnail' />
            {/* <div className='rating'>
                <IoStar />
                <p>{rating}</p>
              </div> */}
          </Col>

          <Col className='zoekResultaat_infoLinks'>
            <div className='infoLinks_naam_locatie'>
              <h3>{name}</h3>
              <div className='location'>
                <IoLocationOutline className='zoekResultaat_locationStamp' />
                <p>{city}</p>
              </div>
            </div>
            <div className='infoLinks_description'>
              <p>
                {/* {description} */}
                {beschrijvingFaciliteiten}
                {hasPool === 1 ? `${t('ZoekResultaat.zwembad')} -` : ''}
                {hasParking === 1 ? `- ${t('ZoekResultaat.parking')} ` : ''}
                {hasWifi === 1 ? `- ${t('ZoekResultaat.wifi')} ` : ''}
                {petsAllowed === 1 ? `- ${t('ZoekResultaat.huisdier')} ` : ''}
                {hasTV === 1 ? `- ${t('ZoekResultaat.tv')} ` : ''}
              </p>
              <IoHeartSharp className='zoekResultaat_hart' />
            </div>
          </Col>

          <Col className='zoekResultaat_infoRechts'>
            <Row>
              <p>
                Vanaf €{pricePerDay}
                {t('ZoekResultaat.nacht')}
              </p>
            </Row>
          </Col>
        </Container>
      </Link>
    </Fragment>
  );
});
