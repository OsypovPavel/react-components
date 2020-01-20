import * as React from 'react';

const Facebook = React.memo(({ className, size, height = '20', width = '10', fill = 'white' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.61424 9.97268H6.64688V20H2.1365V9.97268H0V6.44809H2.1365V4.18033C2.1365 2.54098 2.96736 0 6.67656 0H10V3.4153H7.56677C7.18101 3.4153 6.61721 3.60656 6.61721 4.37158V6.44809H9.97033L9.61424 9.97268Z"
        fill={fill}
      />
    </svg>
  );
});

export { Facebook };
