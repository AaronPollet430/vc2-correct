import {
  IoCaretForwardOutline,
  IoCaretDown,
  IoCarSharp,
} from 'react-icons/io5';
import React from 'react';
import useCollapse from 'react-collapsed';
import CheckboxProton from '../layout/CheckboxProton';

function CollapsibleFaciliteiten({
  title,
  faciliteiten,
  changeCheckedFaciliteiten,
}) {
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className='collapsible'>
      <div className='header' {...getToggleProps()}>
        <IoCarSharp className='faciliteiten-car' />
        {isExpanded ? `${title}` : `${title}`}
        {isExpanded ? (
          <IoCaretDown className='dropdown-arrow' />
        ) : (
          <IoCaretForwardOutline className='dropdown-arrow' />
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className='content'>
          <div className='faciliteiten'>
            {faciliteiten.map((faciliteit) => (
              <CheckboxProton
                key={faciliteit.id}
                label={faciliteit.label}
                changeCheckedFaciliteiten={changeCheckedFaciliteiten}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollapsibleFaciliteiten;
