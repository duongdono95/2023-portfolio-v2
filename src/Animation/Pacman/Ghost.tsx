import React from 'react'

const Ghost = () => {
  return (
    <div className="ghost__container">
      <div className="ghost">
        <div className="ghost__eyes">
          <div className="ghost__eye">
            <div></div>
          </div>
          <div className="ghost__eye">
            <div></div>
          </div>
        </div>
        <svg width="50" height="69" viewBox="0 0 50 69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
                clipRule="evenodd"
                d="M25 0C11.1929 0 0 11.1929 0 25V69H0.297363L6.29736 63L12.2974 69H12.7656L18.7656 63L24.7656 69H25.2334L31.2334 63L37.2334 69H37.7017L43.7017 63L49.7017 69H50V25C50 11.1929 38.8071 0 25 0Z"
                fill="#8E8E8E"/>
        </svg>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  )
}

export default Ghost