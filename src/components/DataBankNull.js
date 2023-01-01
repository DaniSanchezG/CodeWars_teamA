// This component must be shown que de database is empty
import classes from './DataBankNull.module.css';

function DataBankNull() {
  return ( 
    <div className={classes["no-data-message"]}>No characters availables</div>
  );
}

export default DataBankNull;
