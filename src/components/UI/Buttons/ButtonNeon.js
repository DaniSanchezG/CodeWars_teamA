import classes from "./ButtonNeon.module.css";
import { useState, useEffect } from "react"

function ButtonNeon({ hoverOn } ) {
  const [hover, setHover] = useState(false);

  useEffect(()=>{
    setHover(hoverOn)
  },[hoverOn])
  return (
    <>
      <div className={hover ? classes.hovered : classes.container}>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default ButtonNeon;
