import React from "react";
import { useState } from "react";
import { Modal } from "./Modal";
import { EmailForm } from "./EmailForm";
import style from "./Modal.module.css";
//import PasswordForm from "./PasswordForm";
//import SuccessMessage from "./SuccessMessage";
import classes from "../SearchForm/SearchForm.module.css";

const LoginForm = () => {
    const [visibility, setVisibility] = useState(false);
    
    return (
        <>
            <button
                className={classes["login__button"]}
                onClick={() => setVisibility(!visibility)}
            >
                SING IN
            </button>
            <Modal estado={visibility} cambiarEstado={setVisibility}>
                <EmailForm  />
            </Modal>
        </>
    );
};

export default LoginForm;
