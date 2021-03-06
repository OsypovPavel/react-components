import * as React from 'react';
import PropTypes from 'prop-types';

const Template = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42.3 42.3">
      <path
        d="M41.1,42.3H1.2c-0.7,0-1.2-0.6-1.2-1.2V1.2C0,0.6,0.6,0,1.2,0h39.8c0.7,0,1.2,0.6,1.2,1.2v39.8
	C42.3,41.8,41.8,42.3,41.1,42.3z M1.2,0.5c-0.4,0-0.7,0.3-0.7,0.7v39.8c0,0.4,0.3,0.7,0.7,0.7h39.8c0.4,0,0.7-0.3,0.7-0.7V1.2
	c0-0.4-0.3-0.7-0.7-0.7H1.2z M40.1,40.3H2.2c-0.1,0-0.2-0.1-0.2-0.3V8.2C2,8.1,2.1,8,2.2,8h37.8c0.1,0,0.3,0.1,0.3,0.3v31.9
	C40.3,40.2,40.2,40.3,40.1,40.3z M2.5,39.8h37.3V8.5H2.5V39.8z M35.1,37.4h-11c-1.2,0-2.2-1-2.2-2.2V21.2c0-1.2,1-2.2,2.2-2.2h11
	c1.2,0,2.2,1,2.2,2.2v13.9C37.4,36.3,36.3,37.4,35.1,37.4z M24.2,19.4c-0.9,0-1.7,0.8-1.7,1.7v13.9c0,0.9,0.8,1.7,1.7,1.7h11
	c0.9,0,1.7-0.8,1.7-1.7V21.2c0-0.9-0.8-1.7-1.7-1.7H24.2z M18.2,37.4h-11c-1.2,0-2.2-1-2.2-2.2V21.2c0-1.2,1-2.2,2.2-2.2h11
	c1.2,0,2.2,1,2.2,2.2v13.9C20.4,36.3,19.4,37.4,18.2,37.4z M7.2,19.4c-0.9,0-1.7,0.8-1.7,1.7v13.9c0,0.9,0.8,1.7,1.7,1.7h11
	c0.9,0,1.7-0.8,1.7-1.7V21.2c0-0.9-0.8-1.7-1.7-1.7H7.2z M35.1,35.4h-11c-0.1,0-0.3-0.1-0.3-0.3V21.2c0-0.1,0.1-0.3,0.3-0.3h11
	c0.1,0,0.3,0.1,0.3,0.3v13.9C35.4,35.2,35.2,35.4,35.1,35.4z M24.4,34.9h10.5V21.4H24.4V34.9z M18.2,35.4h-11
	c-0.1,0-0.3-0.1-0.3-0.3V21.2c0-0.1,0.1-0.3,0.3-0.3h11c0.1,0,0.3,0.1,0.3,0.3v13.9C18.4,35.2,18.3,35.4,18.2,35.4z M7.5,34.9h10.5
	V21.4H7.5V34.9z M36.1,17.4H6.2c-0.7,0-1.2-0.6-1.2-1.2v-4C5,11.5,5.5,11,6.2,11h29.9c0.7,0,1.2,0.6,1.2,1.2v4
	C37.4,16.9,36.8,17.4,36.1,17.4z M6.2,11.5c-0.4,0-0.7,0.3-0.7,0.7v4c0,0.4,0.3,0.7,0.7,0.7h29.9c0.4,0,0.7-0.3,0.7-0.7v-4
	c0-0.4-0.3-0.7-0.7-0.7H6.2z M35.1,15.4H7.2c-0.1,0-0.3-0.1-0.3-0.3v-2c0-0.1,0.1-0.3,0.3-0.3h27.9c0.1,0,0.3,0.1,0.3,0.3v2
	C35.4,15.3,35.2,15.4,35.1,15.4z M7.5,14.9h27.4v-1.5H7.5V14.9z M40.1,6.5H2.2C2.1,6.5,2,6.4,2,6.2v-4C2,2.1,2.1,2,2.2,2h37.8
	c0.1,0,0.3,0.1,0.3,0.2v4C40.3,6.4,40.2,6.5,40.1,6.5z M2.5,6h37.3V2.5H2.5V6z"
      />
    </svg>
  );
};
Template.propTypes = {
  className: PropTypes.string,
};
Template.defaultProps = {
  className: '',
};
export default Template;
