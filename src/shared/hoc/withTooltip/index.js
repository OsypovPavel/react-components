import React,{useState, useEffect, useRef} from 'react'
import {Style} from "./styles";

function withTooltip(Component) {
  return ({disabled, ...props}) => {
    const [positionHint, changePositionHint] = useState({
      clientX: 0,
      clientY: 0,
      show: false
    });
    const wrapperRef = useRef(null);
    const listenMoveMouse = ({ clientX, clientY }) => {
      changePositionHint({
        clientX: clientX + 4,
        clientY: clientY + 2,
        show: true
      });
    };
    const listenEnterMouse = {
      mouseover() {
        document.addEventListener("mousemove", listenMoveMouse);
      },
      mouseleave() {
        document.removeEventListener("mousemove", listenMoveMouse);
        changePositionHint({ clientX: 0, clientY: 0, show: false });
      }
    };
    useEffect(() => {
      if (disabled) {
        wrapperRef.current.addEventListener("mouseover", listenEnterMouse.mouseover);
        wrapperRef.current.addEventListener("mouseleave", listenEnterMouse.mouseleave);
      }
      return () => {
        if (disabled) {
          wrapperRef.current.removeEventListener("mouseover", listenEnterMouse.mouseover);
          wrapperRef.current.removeEventListener("mouseleave", listenEnterMouse.mouseleave);
        }
      };
    }, []);
    return (
      <React.Fragment>
        {positionHint.show && (
          <Style.HintWrapper
            style={{
              top: positionHint.clientY,
              left: positionHint.clientX,
            }}
          >
            <Style.Hint>Данное поле невозможно заполнить</Style.Hint>
          </Style.HintWrapper>
        )}
        <Component setRef={wrapperRef} disabled={disabled} {...props}/>
      </React.Fragment>
    )
  }
}

export default withTooltip;