import React from 'react';
import ZoekResultaat from './ZoekResultaat';

const List = ({ zoekResultaat }) => {
  return (
    <div>
      {zoekResultaat.map((item) => (
        <ZoekResultaat
          item={item}
          path={'/homes/detail/' + item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default List;
