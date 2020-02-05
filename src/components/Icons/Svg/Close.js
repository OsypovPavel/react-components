import * as React from 'react';

const Close = ({ className }) => {
  return (
    <svg className={className} width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 0.347754L5.65217 0L3 2.65233L0.347824 0L0 0.347754L2.65218 3.00011L0 5.65226L0.347824 6L3 3.34785L5.65217 6L6 5.65226L3.34764 3.00011L6 0.347754Z"
        fill="#2E2E2E"
      />
    </svg>
  );
};

export { Close };
