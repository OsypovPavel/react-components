import * as React from 'react';

const ArrowRigth = ({ className, size, height = '20', width = '20', fill = '#CBCCDA' }) => {
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
      <polygon fill={fill} points="1.4,0 0,1.4 5.3,6.7 0,12 1.4,13.4 8.1,6.7 " />
    </svg>
  );
};
export { ArrowRigth };
