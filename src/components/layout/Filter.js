import React, { Fragment } from 'react';
import '../CSS/Filter.css';
import CollapsiblePrijs from '../functions/CollapsiblePrijs';
import CollapsibleScore from '../functions/CollapsibleScore';
import CollapsibleAccommodaties from '../functions/CollapsibleAccommodaties';
import CollapsibleFaciliteiten from '../functions/CollapsibleFaciliteiten';
import CollapsibleKamers from '../functions/CollapsibleKamers';
import { useTranslation } from 'react-i18next';

function Filter({
  selectedKamers,
  changedKamers,
  selectedPrice,
  changedPrice,
  selectedScore,
  changedScore,
  accommodaties,
  changeCheckedAccommodaties,
  faciliteiten,
  changeCheckedFaciliteiten,
}) {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className='filter_wrapper'>
        <h2> {`${t('Filter.titel')}`}</h2>
        <hr></hr>
        <div className='filter-kamers'>
          <CollapsibleKamers
            title={t('Filter.kamers')}
            value={selectedKamers}
            changedKamers={changedKamers}
          />
        </div>
        <div className='filter-prijs-slider'>
          <CollapsiblePrijs
            title={t('Filter.prijsPnacht')}
            content='min'
            slider='slider'
            value={selectedPrice}
            changedPrice={changedPrice}
          />
        </div>
        <div className='filter-score'>
          <CollapsibleScore
            title={t('Filter.score')}
            value={selectedScore}
            changedScore={changedScore}
          />
        </div>
        <div className='filter-aanbiedingen'>
          <CollapsibleAccommodaties
            title={t('Filter.types')}
            accommodaties={accommodaties}
            changeCheckedAccommodaties={changeCheckedAccommodaties}
          />
        </div>
        <div className='filter-faciliteiten'>
          <CollapsibleFaciliteiten
            title={t('Filter.facili')}
            faciliteiten={faciliteiten}
            changeCheckedFaciliteiten={changeCheckedFaciliteiten}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Filter;
