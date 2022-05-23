import { IoCaretDown, IoBed } from 'react-icons/io5';
import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
// import axios from 'axios';
import '../CSS/CollapsibleKamers.css';
import { useTranslation } from 'react-i18next';

function CollapsibleKamers({ title, value, changedKamers }) {
  const { t } = useTranslation();

  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  const [selectedKamers, setSelectedKamers] = useState(value);

  const handleDecrement = () => {
    if (selectedKamers > 1) {
      setSelectedKamers((prevCount) => prevCount - 1);
      changedKamers(selectedKamers - 1);
    }
  };
  const handleIncrement = () => {
    if (selectedKamers < 10) {
      setSelectedKamers((prevCount) => prevCount + 1);
      changedKamers(selectedKamers + 1);
    }
  };

  return (
    <div className='collapsible'>
      <div className='header' {...getToggleProps()}>
        <IoBed className='kamers' />
        {isExpanded ? `${title}` : `${title}`}
        <IoCaretDown className='dropdown-arrow' />
      </div>
      <div {...getCollapseProps()}>
        <div className='content'>
          <div className='field'>
            <p> {`${t('Filter.aantalKamers')}`}</p>
            <button
              type='button'
              onClick={handleDecrement}
              className='button-minus'>
              -
            </button>
            <input
              type='number'
              className='input'
              value={selectedKamers}
              onChange={() => changedKamers(selectedKamers)}
            />

            <button
              type='button'
              onClick={handleIncrement}
              className='button-plus'>
              +
            </button>
          </div>
          {/* <button type='button' onClick={fetchAccommodaties}>
            apply
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleKamers;
