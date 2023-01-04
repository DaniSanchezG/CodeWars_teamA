import React from "react";
import classes from '../css/ProgressBar.module.css';


export var ProgressBar=({ width, percent }) =>{

    let interval = undefined;

    const [value, setValue] = React.useState(100);
  
    React.useEffect(() => {
        interval = setInterval(() => {
            setValue((prev) => width*percent);
          }, 10);
    });
  
    return (
      <div>
        <div className={classes.progressDiv} style={{ width: width }}>
          <div style={{ width: `${value}%` }} className={classes.progress} />
        </div>
      </div>
    );
  };
