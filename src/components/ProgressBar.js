/*import React from "react";
import classes from '../css/ProgressBar.module.css';


export var ProgressBar=({ width, percent }) =>{

    let interval = undefined;

    const [value, setValue] = React.useState(0);
  
    React.useEffect(() => {
        interval = setInterval(() => {
            setValue((prev) => prev + 1);
          }, 10);
    });

    React.useEffect(() => {
        if (progress === 100) {
          setRunning(false);
          clearInterval(interval);
        }
      }, [progress]);
  
    return (
      <div>
        <div className={classes.progressDiv} style={{ width: width }}>
          <div style={{ width: `${value}%` }} className={classes.progress} />
        </div>
      </div>
    );
  };*/
