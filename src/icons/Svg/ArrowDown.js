import * as React from 'react';

const ArrowDown = React.memo(({ className, size, height = '10', width = '10', fill = '#2E2E2E' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg
      className={className}
      height={h}
      width={w}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 10 6">
      <path fill={fill} d="M5,5.7l-5-5L0.7,0L5,4.3L9.3,0L10,0.7L5,5.7z"/>
    </svg>
  );
});

export { ArrowDown };
