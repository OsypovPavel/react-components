import * as React from 'react';

const Star = ({ size, height = '14', width = '12', fill = 0, fillStroke = '#2B61B4', id = '' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg width={w} height={h} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`half_grad_${id}`}>
          <stop offset={`${fill}%`} stopColor={fillStroke} />
          <stop offset={`${fill}%`} stopColor="transparent" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M7.25821 10.613L7 10.4573L6.74179 10.613L3.42909 12.6108L4.30551 8.84309L4.37383 8.54941L4.14595 8.35194L1.22166 5.81791L5.07646 5.48715L5.37653 5.46141L5.49407 5.18411L7 1.63129L8.50596 5.18412L8.6235 5.46141L8.92357 5.48715L12.7783 5.81791L9.85405 8.35194L9.62617 8.54941L9.69449 8.84309L10.5709 12.6108L7.25821 10.613Z"
        stroke={fillStroke}
        fill={`url(#half_grad_${id})`}
      />
    </svg>
  );
};

export { Star };
