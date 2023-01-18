import React from 'react';
import './Thunder.scss';
const Thunder = (props) => {
  const { sun, scale } = props;
  return (
    <div className="thunder">
      <div class="icon__thunder"></div>
    </div>
  );
};

export default Thunder;
