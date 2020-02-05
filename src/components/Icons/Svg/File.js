import * as React from 'react';

const File = ({ className, size, height = '13', width = '11', fill = '#404764' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.75 0.25H1.75C1.0625 0.25 0.50625 0.8125 0.50625 1.5L0.5 11.5C0.5 12.1875 1.05625 12.75 1.74375 12.75H9.25C9.9375 12.75 10.5 12.1875 10.5 11.5V4L6.75 0.25ZM8 10.25H3V9H8V10.25ZM8 7.75H3V6.5H8V7.75ZM6.125 4.625V1.1875L9.5625 4.625H6.125Z"
        fill={fill}
      />
    </svg>
  );
};

export { File };
