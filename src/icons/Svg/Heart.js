import * as React from 'react';

const Heart = React.memo(({ className, size, height = '20', width = '22', fill = 'none', fillStroke = '#A1ABB4' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 22 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.70119 12.9193L11 19L17.2988 12.9192C19.6893 10.5236 23.6636 5.41736 18.4079 1.7714C15.9715 0.0812157 12.158 1.26461 11 4.38296C9.84207 1.26461 6.02852 0.0812958 3.59212 1.77148C-1.66364 5.41744 2.31067 10.5237 4.70119 12.9193Z"
        stroke={fillStroke}
        strokeLinejoin="round"
      />
    </svg>
  );
});

export { Heart };
