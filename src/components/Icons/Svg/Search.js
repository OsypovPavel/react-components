import * as React from 'react';

const Search = ({ className }) => {
  return (
    <svg
      className={ className }
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 19.3 20"
    >
      <path
        fill="#808FA4"
        d="M19,18.2l-4.8-5c1.2-1.5,1.9-3.3,1.9-5.2c0-4.5-3.6-8.1-8.1-8.1S0,3.6,0,8.1s3.6,8.1,8.1,8.1
	c1.7,0,3.3-0.5,4.6-1.5l4.8,5c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.5-0.1,0.7-0.3C19.4,19.3,19.4,18.6,19,18.2z M8.1,14
	c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S11.4,14,8.1,14z"
      />
    </svg>
  );
};

export { Search };
