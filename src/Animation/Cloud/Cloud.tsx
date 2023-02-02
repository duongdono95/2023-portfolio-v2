import React from 'react';
import './Cloud.scss';

interface Props {
  cloudColor?: string
}

const Cloud:React.FC<Props> = ({cloudColor}) => {

  return (
    <div className="weather">
      <div className="icon">
        <div style={cloudColor ? {backgound:`${cloudColor}`} : {}} className="icon__cloud">
          <div className="icon__cloud-reflect icon__cloud-reflect--1"></div>
          <div className="icon__cloud-reflect icon__cloud-reflect--2"></div>
          <div className="icon__cloud-highlight"></div>
          <svg
            className="icon__cloud-svg isolation"
            width="400"
            height="288"
            viewBox="0 0 400 288"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="cloudPath">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 143.918C0 223.2 64.2713 287.472 143.554 287.472H299.652C355.073 287.472 400 242.544 400 187.123C400 131.702 355.073 86.7748 299.652 86.7748C291.657 86.7748 283.88 87.7098 276.425 89.4764C254.979 37.1894 203.567 0.363647 143.554 0.363647C64.2713 0.363647 0 64.635 0 143.918Z"
              />
            </clipPath>
          </svg>
        </div>
        <div className="icon__cloud-shadow"></div>
      </div>
    </div>
  );
};

export default Cloud;
