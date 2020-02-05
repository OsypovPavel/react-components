import * as React from 'react';

const ArrowRightFooter = ({ className, size, height = '12', width = '17', fill = 'white' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.4413 0.162896C11.2254 -0.0542986 10.8476 -0.0542986 10.5778 0.162896C10.3619 0.38009 10.3619 0.760181 10.5778 1.03167L14.8952 5.37557H0.593651C0.269841 5.42986 0 5.64706 0 6.02715C0 6.40724 0.269841 6.62443 0.593651 6.62443H14.9492L10.6317 10.9683C10.4159 11.1855 10.4159 11.6199 10.6317 11.8371C10.8476 12.0543 11.2794 12.0543 11.4952 11.8371L16.8921 6.40724C17.1079 6.19004 17.1079 5.80995 16.8921 5.53846L11.4413 0.162896Z"
        fill={fill}
      />
    </svg>
  );
};

export { ArrowRightFooter };
