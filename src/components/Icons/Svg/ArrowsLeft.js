import * as React from 'react';

const ArrowLeft = ({ className, size, height = '20', width = '20', fill = '#CBCCDA' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 8.1 13.4"
      height={h}
      width={w}>
      <polygon fill={fill} points="8.1,1.4 6.7,0 0,6.7 6.7,13.4 8.1,12 2.8,6.7 " />
    </svg>
  );
};

export { ArrowLeft };
