import * as React from 'react';

const UserProfile = ({ className }) => {
  return (
    <svg className={className} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 18C1 16 3.9 11.5 9.5 11.5C15.1 11.5 18 16.5 18 18" stroke="white"/>
      <circle cx="9.5" cy="5" r="4.5" stroke="white"/>
    </svg>
  );
};

export { UserProfile };
