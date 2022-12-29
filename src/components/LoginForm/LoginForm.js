import React from "react";
import { useState } from "react";
import { Modal } from "./Modal";
import { EmailForm } from "./EmailForm";
import style from "./Modal.module.css";
//import PasswordForm from "./PasswordForm";
//import SuccessMessage from "./SuccessMessage";

const LoginForm = () => {
    const [visibility, setVisibility] = useState(false);
    
    return (
        <>
            <button
                className={style.button}
                onClick={() => setVisibility(!visibility)}
            >
                Abrir Modal
            </button>
            <Modal estado={visibility} cambiarEstado={setVisibility}>
                <EmailForm  />
            </Modal>
        </>
    );
};

export default LoginForm;
