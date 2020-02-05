import * as React from 'react';

const Folder = ({ className, size, height = '15', width = '15', fill = '#404764' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.25 3.75H0V6.875H0.00625L0 12.5C0 13.1875 0.5625 13.75 1.25 13.75H12.5V12.5H1.25V3.75ZM13.75 2.5H8.75L7.5 1.25H3.75C3.0625 1.25 2.50625 1.8125 2.50625 2.5L2.5 10C2.5 10.6875 3.0625 11.25 3.75 11.25H13.75C14.4375 11.25 15 10.6875 15 10V3.75C15 3.0625 14.4375 2.5 13.75 2.5ZM4.375 9.375L7.1875 5.625L9.375 8.44375L10.9375 6.5625L13.125 9.375H4.375Z"
        fill={fill}
      />
    </svg>
  );
};

export { Folder };
