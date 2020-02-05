import React, { useState, useRef } from 'react';

function clickOutside(Component) {
  // eslint-disable-next-line react/prop-types
  return (props) => {
    const [open, stateOpen] = useState(false);
    const wrapperRef = useRef(null);
    // ToDo @refactor => find how to remove listener if current.contains(event.target);
    const clickChecker = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const setOpen = (e) => {
      if (e) {
        document.addEventListener('mousedown', clickChecker);
      } else {
        document.removeEventListener('mousedown', clickChecker);
      }
      stateOpen(e);
    };
    return <Component setRef={wrapperRef} setOpen={setOpen} open={open} {...props} />;
  };
}

export default clickOutside;
