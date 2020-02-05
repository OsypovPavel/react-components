import * as React from 'react';

const Plus = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 7.9 7.9">
      <path
        fill="#FFFFFF"
        d="M7.4,3.4h-3V0.5C4.4,0.2,4.2,0,3.9,0S3.4,0.2,3.4,0.5v2.9H0.5C0.2,3.4,0,3.6,0,3.9s0.2,0.5,0.5,0.5h2.9v3
	c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-3h3c0.3,0,0.5-0.2,0.5-0.5S7.7,3.4,7.4,3.4z"
      />
    </svg>
  );
};

export { Plus };
