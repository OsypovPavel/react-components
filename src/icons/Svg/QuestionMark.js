import * as React from 'react';

const QuestionMark = React.memo(({ className, size, height = '11px', width = '6px', fill = '#FFFFFF' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      height={h}
      width={w}
      viewBox="0 0 5.2 7.8"
      xmlSpace="preserve">
      <path
        fill={fill}
        d="M2,5.4L1.8,3.6l0.1-0.1c1.4-0.1,2-0.5,2-1.3c0-0.3-0.1-0.6-0.3-0.8C3.3,1.3,3,1.2,2.6,1.2
   C2,1.2,1.4,1.5,0.8,2.1L0,1.2C0.7,0.4,1.6,0,2.7,0c0.8,0,1.4,0.2,1.9,0.6C5,1,5.2,1.6,5.2,2.3c0,0.7-0.2,1.2-0.6,1.5
   C4.2,4.1,3.7,4.4,3,4.5L2.9,5.4H2z M1.7,7.8V6.3h1.5v1.5H1.7z"
      />
    </svg>
  );
});

export { QuestionMark };
