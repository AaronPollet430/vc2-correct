import {
  IoCaretForwardOutline,
  IoCaretDown,
  IoPricetagSharp,
} from 'react-icons/io5';
import React from 'react';
import useCollapse from 'react-collapsed';
import CheckboxProton from '../layout/CheckboxProton';

function CollapsibleAccommodaties({
  title,
  accommodaties,
  changeCheckedAccommodaties,
}) {
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className='collapsible'>
      <div className='header' {...getToggleProps()}>
        <IoPricetagSharp />
        {isExpanded ? `${title}` : `${title}`}
        {isExpanded ? (
          <IoCaretDown className='dropdown-arrow' />
        ) : (
          <IoCaretForwardOutline className='dropdown-arrow' />
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className='content'>
          <div className='accommodatie_types'>
            {accommodaties.map((acco) => (
              <CheckboxProton
                key={acco.id}
                label={acco.label}
                changeCheckedAccommodaties={changeCheckedAccommodaties}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollapsibleAccommodaties;
