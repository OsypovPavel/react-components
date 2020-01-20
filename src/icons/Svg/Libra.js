import * as React from 'react';

const Libra = React.memo(({ className, size, height = '22', width = '22', fill = 'none', fillStroke = '#A1ABB4' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.9477 21H10.9988M10.9988 21V5.08297M10.9988 21H15.0499M10.9988 5.08297C10.1886 5.08297 9.10829 4.42969 9.10829 2.90539C9.10829 1.5444 10.1886 1 10.9988 1C11.809 1 12.8894 1.5444 12.8894 2.90539C12.8894 3.0588 12.8784 3.20339 12.8579 3.33938M10.9988 5.08297C11.7275 5.08297 12.6746 4.55457 12.8579 3.33938M12.8579 3.33938L17.4804 4.15657M19.6412 4.53857L17.4804 4.15657M2.33489 1.48266L9.11819 2.68186M17.4804 4.15657L13.9694 11.0713M17.4804 4.15657L20.9914 11.0713M13.9694 11.0713C13.8794 12.3416 14.4556 14.8821 17.4804 14.8821C20.5052 14.8821 21.0814 12.3416 20.9914 11.0713M13.9694 11.0713H17.4804H20.9914M1.00864 8.78315L4.5196 1.8684L8.03056 8.78315M1.00864 8.78315C0.918613 10.0534 1.49477 12.5939 4.5196 12.5939C7.54443 12.5939 8.12059 10.0534 8.03056 8.78315M1.00864 8.78315H4.5196H8.03056"
        stroke={fillStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export { Libra };
