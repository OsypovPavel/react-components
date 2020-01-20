import * as React from 'react';

const ArrowUp = React.memo(({ className, size, height = '10', width = '10', fill = '#2E2E2E' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      height={h}
      width={w}
      viewBox="0 0 10 5.7">
      <path fill={fill} d="M5,0l5,5L9.3,5.7L5,1.4L0.7,5.7L0,5L5,0z" />
    </svg>
  );
});

export { ArrowUp };
