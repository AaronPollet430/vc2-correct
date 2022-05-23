import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Stack } from 'react-bootstrap';

const CheckboxProton = (lijst, changeChecked) => {
  const { id, checked, label } = lijst;
  return (
    <div>
      <Stack gap={1} className='col-md-8 mx-auto'>
        <FormControlLabel
          id={id}
          label={label}
          labelPlacement='end'
          control={
            <Checkbox
              size='small'
              defaultChecked={checked}
              color='primary'
              onChange={() => changeChecked}
            />
          }
        />
      </Stack>
    </div>
  );
};

export default CheckboxProton;
