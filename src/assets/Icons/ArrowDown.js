import React from 'react';

const ArrowDown = (props) => {
  return (
    <svg
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 10 6"
      {...props}>
      <path fill={'#333333'} d="M5,5.7l-5-5L0.7,0L5,4.3L9.3,0L10,0.7L5,5.7z" />
    </svg>
  );
};

export default ArrowDown;
