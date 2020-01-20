import * as React from 'react';
import PropTypes from 'prop-types';

const Point = React.memo(({ className }) => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99686 1C4.69106 1 2 3.51824 2 6.61174C2 6.96394 2.0345 7.31908 2.10664 7.66541C2.10978 7.68595 2.12232 7.74759 2.14741 7.85325C2.23837 8.23187 2.37324 8.60461 2.54888 8.95975C3.19498 10.3832 4.61579 12.5698 7.7334 14.912C7.81181 14.9707 7.90591 15 8 15C8.09409 15 8.18819 14.9707 8.2666 14.912C11.3811 12.5698 12.805 10.3832 13.4511 8.95975C13.6268 8.60461 13.7616 8.2348 13.8526 7.85325C13.8777 7.74759 13.8902 7.68595 13.8934 7.66541C13.9624 7.31908 14 6.96394 14 6.61174C13.9937 3.51824 11.3027 1 7.99686 1ZM13.0528 7.52746C13.0528 7.53333 13.0497 7.5392 13.0497 7.54507C13.0465 7.55975 13.0371 7.60377 13.0214 7.67128C13.0214 7.67421 13.0214 7.67421 13.0214 7.67715C12.943 8.00587 12.827 8.32579 12.6733 8.63396C12.6702 8.6369 12.6702 8.64277 12.667 8.6457C12.0805 9.94591 10.7946 11.93 7.99686 14.0931C5.19916 11.93 3.91323 9.94591 3.32671 8.6457C3.32358 8.64277 3.32358 8.6369 3.32044 8.63396C3.16989 8.32872 3.05384 8.00587 2.97229 7.67715C2.97229 7.67421 2.97229 7.67421 2.97229 7.67128C2.95348 7.60377 2.9472 7.55975 2.94407 7.54507C2.94407 7.5392 2.94093 7.53333 2.94093 7.52453C2.8782 7.22222 2.84684 6.91698 2.84684 6.60881C2.84684 3.95262 5.15839 1.78952 7.99686 1.78952C10.8353 1.78952 13.1469 3.95262 13.1469 6.60881C13.1469 6.91992 13.1155 7.22809 13.0528 7.52746Z"
        fill="#A5B3C5"
      />
      <path
        d="M7.9999 3.33325C6.01605 3.33325 4.3999 4.9045 4.3999 6.83325C4.3999 8.762 6.01605 10.3333 7.9999 10.3333C9.98376 10.3333 11.5999 8.762 11.5999 6.83325C11.5999 4.9045 9.98376 3.33325 7.9999 3.33325ZM7.9999 9.55483C6.45493 9.55483 5.20056 8.33243 5.20056 6.83325C5.20056 5.33408 6.45789 4.11167 7.9999 4.11167C9.54191 4.11167 10.7992 5.33408 10.7992 6.83325C10.7992 8.33243 9.54488 9.55483 7.9999 9.55483Z"
        fill="#A5B3C5"
      />
    </svg>
  );
});
Point.propTypes = {
  className: PropTypes.string,
};
export { Point };
