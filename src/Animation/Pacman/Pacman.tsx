
 import React from 'react';
import './Pacman.scss';
import Ghost from "./Ghost";

const Pacman = () => {
  return (
    <div className="pacman-container">
        <Ghost />
        <div className="pacman">

          <div className="dots"></div>
          <div className="pacman-top">
            <div className="eye"></div>
          </div>
          <div className="pacman-bottom"></div>
          <div className="accelerators">
            <div className="accelerator"></div>
            <div className="accelerator"></div>
            <div className="accelerator"></div>
          </div>
      </div>
    </div>
  )
}

export default Pacman