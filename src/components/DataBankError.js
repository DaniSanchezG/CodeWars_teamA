import classes from "./DataBankError.module.css";

function DabatanError(error) {
  return ( 
    <div className={classes["error-message"]}>{error.message}Error: Something went wrong.</div>
  );
}

export default DabatanError;
