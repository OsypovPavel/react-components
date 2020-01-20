import * as React from 'react';

const Excel = React.memo(({ size, height = '24', width = '24', fill = '#3E5062' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.2263 2.76953H14.769V5.52399H17.5669V7.39876H14.769V9.23107H17.5383V11.0772H14.769V12.9234H17.5383V14.7695H14.769V16.6157H17.5383V18.4618H14.769V21.2311H23.2263C23.6518 21.2311 23.9998 20.8701 23.9998 20.428V3.57261C23.9998 3.13045 23.6518 2.76953 23.2263 2.76953ZM22.1537 18.4618H18.4614V16.6157H22.1537V18.4618ZM22.1537 14.7695H18.4614V12.9234H22.1537V14.7695ZM22.1537 11.0772H18.4614V9.23107H22.1537V11.0772ZM22.1537 7.38492H18.4614V5.53876H22.1537V7.38492Z"
        fill={fill}
      />
      <path
        d="M0 2.66677V21.3342L13.8462 24V0L0 2.66677ZM8.75815 16.6892L7.14738 13.644C7.08646 13.5305 7.02369 13.3218 6.95815 13.0182H6.93323C6.90277 13.1612 6.83077 13.3791 6.71723 13.6708L5.10092 16.6892H2.59108L5.57077 12.0148L2.84492 7.33939H5.40738L6.744 10.1428C6.84831 10.3643 6.94154 10.6274 7.02462 10.9311H7.05046C7.10308 10.7483 7.20092 10.4769 7.344 10.116L8.83015 7.33846H11.1766L8.37323 11.9742L11.2551 16.6883L8.75815 16.6892Z"
        fill={fill}
      />
    </svg>
  );
});

export { Excel };
