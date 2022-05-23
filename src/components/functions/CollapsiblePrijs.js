import {
  IoCaretForwardOutline,
  IoCaretDown,
  IoLogoEuro,
} from 'react-icons/io5';
import React from 'react';
import { Slider } from '@material-ui/core';
import useCollapse from 'react-collapsed';
import '../CSS/CollapsiblePrijs.css';
import { useTranslation } from 'react-i18next';

function CollapsiblePrijs({ title, value, changedPrice }) {
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  const { t } = useTranslation();
  return (
    <div className='collapsible'>
      <div className='header' {...getToggleProps()}>
        <IoLogoEuro className='euro-teken' />
        {isExpanded ? `${title}` : `${title}`}
        {isExpanded ? (
          <IoCaretDown className='dropdown-arrow' />
        ) : (
          <IoCaretForwardOutline className='dropdown-arrow' />
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className='content'>
          <p>{`${t('Filter.prijsPnachtInput')}`}</p>
          <div className='price_input'></div>
          <Slider
            className='prijs-slider'
            value={value}
            onChange={changedPrice}
            valueLabelDisplay='on'
            min={10}
            max={750}
          />
        </div>
      </div>
    </div>
  );
}

export default CollapsiblePrijs;
