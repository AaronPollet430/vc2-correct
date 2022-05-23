import {
  IoCaretForwardOutline,
  IoCaretDown,
  IoStar,
  IoStarOutline,
} from 'react-icons/io5';
import React from 'react';
import useCollapse from 'react-collapsed';
import '../CSS/Collapsible.css';
// import StarRating from './StarRating';
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#077b88',
  },
  '& .MuiRating-iconHover': {
    color: '#077b88',
  },
});

const CollapsibleScore = ({ title, selectedScore, changedScore }) => {
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className='collapsible'>
      <div className='header' {...getToggleProps()}>
        <IoStar className='thumb-up' />
        {isExpanded ? `${title}` : `${title}`}
        {isExpanded ? (
          <IoCaretDown className='dropdown-arrow' />
        ) : (
          <IoCaretForwardOutline className='dropdown-arrow' />
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className='content'>
          <StyledRating
            name='customized-color'
            value={selectedScore}
            onChange={changedScore}
            icon={<IoStar />}
            emptyIcon={<IoStarOutline />}
          />
        </div>
      </div>
    </div>
  );
};

export default CollapsibleScore;
