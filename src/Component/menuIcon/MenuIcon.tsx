import React, { useState } from 'react';
import './MenuIcon.scss';

interface Props {
  status:boolean;
}

const MenuIcon:React.FC<Props> = (props) => {
  const {status} = props;

  return (
    <div id="nav-menu-icon" className={status ? 'open' : ''}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuIcon;
