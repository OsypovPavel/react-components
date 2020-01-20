import * as React from 'react';

const Romania = React.memo(({ className }) => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.19828 2.75854C0.536469 2.75854 0 3.29501 0 3.95683V12.043C0 12.7048 0.536469 13.2413 1.19828 13.2413H5.33334V2.75854H1.19828Z" fill="#41479B"/>
      <path d="M10.6669 2.75867H5.3335V13.2415H10.6669V2.75867Z" fill="#FFE15A"/>
      <path d="M14.8016 2.75854H10.6665V13.2413H14.8016C15.4633 13.2413 15.9998 12.7048 15.9998 12.043V3.95683C15.9998 3.29501 15.4634 2.75854 14.8016 2.75854Z" fill="#FF4B55"/>
    </svg>
  );
});
export { Romania };
