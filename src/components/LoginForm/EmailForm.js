import React, { useRef, useState } from "react";
import style from "./Modal.module.css";
import { MdArrowBack } from "react-icons/md";
//import PasswordForm from "./PasswordForm";

const users = [
    {
        email: "user1@code.com",
        password: "123&Abc",
    },
];

export const EmailForm = () => {
    const emailRef = useRef();
    const message = useRef();
    const closeForm = useRef();
    const openForm = useRef();

    let user = {};
    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
    });

    const handlesubmitEmail = async (e) => {
        e.preventDefault();
        /* try{
            let userDb = await fetch('public/db/users.json', {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                 }
              });
            let userResponse = await userDb.text();
            console.log(userResponse);
        } catch(error){
            console.log(error);
        } */

        let emailInput = emailRef.current.value;

        if (emailInput.length <= 0) {
            message.current.classList.add(style["required-message"]);
            emailRef.current.classList.add(style["error"]);
        } else if (
            emailInput.indexOf("@") == -1 ||
            emailInput.indexOf(".") == -1
        ) {
            message.current.classList.add(style["required-message"]);
            emailRef.current.classList.add(style["error"]);
            message.current.innerHTML = "Please enter a valid email address.";
        } else {
            const usersFound = users.filter((e) => {
                return e.email.toLowerCase() === emailInput.toLowerCase();
            });
            if (usersFound.length > 0) {
                user = usersFound[0];
                setUserInput(user);
            } else {
                setUserInput({ email: emailInput, password: "" });
            }
            //boton continuar
            closeForm.current.classList.add(style["success"]);
            closeForm.current.classList.remove(style["open"]);

            openForm.current.classList.add(style["open"]);
            openForm.current.classList.remove(style["success"]);
        }
    };

    const onEmailChange = (e) => {
        let emailInput = emailRef.current.value;
        if (emailInput && emailInput.length > 0) {
            message.current.classList.remove(style["required-message"]);
            emailRef.current.classList.remove(style["error"]);
        }
    };

    //password

    const passwordlRef = useRef();
    const passwordmessage = useRef();
    const passwordErrorMessage = useRef();
    const loginSuccessMessage = useRef();
    const passwordVisibility = useRef();

    const handlesubmitPassword = (e) => {
        e.preventDefault();

        let passwordInput = passwordlRef.current.value;
        console.log(passwordInput);
        console.log(userInput.password);

        if (passwordInput.length <= 0) {
            passwordmessage.current.classList.add(style["required-message"]);
            passwordlRef.current.classList.add(style["error"]);
        } else if (passwordInput !== userInput.password) {
            passwordErrorMessage.current.classList.add(
                style["password-error-visible"]
            );
            passwordlRef.current.value = "";
        } else if (passwordInput == userInput.password) {
            passwordErrorMessage.current.classList.remove(
                style["password-error-visible"]
            );

            loginSuccessMessage.current.classList.add(style["open"]);
            passwordVisibility.current.classList.add(style["success"]);
        }
    };

    const onPasswordChange = (e) => {
        let passwordInput = passwordlRef.current.value;
        if (passwordInput && passwordInput.length > 0) {
            passwordmessage.current.classList.remove(style["required-message"]);
            passwordlRef.current.classList.remove(style["error"]);
        }
    };

    const goBack = (e) => {
        emailRef.current.value = "";

        closeForm.current.classList.remove(style["success"]);
        closeForm.current.classList.add(style["open"]);
        openForm.current.classList.remove(style["open"]);
        openForm.current.classList.add(style["success"]);

        passwordErrorMessage.current.classList.remove(
            style["password-error-visible"]
        );

    };

    return (
        <>
            <section ref={closeForm}>
                <h2 className={style["md-title"]}>ENTER YOUR EMAIL ADDRESS</h2>
                <form onSubmit={handlesubmitEmail} className="form-login">
                    <div ref={message} className={style["success"]}>
                        Success
                    </div>
                    <input
                        ref={emailRef}
                        type="text"
                        placeholder="Email Address"
                        id="email"
                        name="email"
                        onChange={onEmailChange}
                    />

                    <div>
                        <p ref={message} className={style["message"]}>
                            Required
                        </p>
                    </div>
                    <input type="submit" value={"Continuar"} name="continuar" />
                </form>
            </section>
            <section ref={openForm} className={style["success"]}>
                <div
                    ref={passwordErrorMessage}
                    className={style["password-error"]}
                >
                    The credentials you entered are incorrect. <br />
                    Reminder: passwords are case sensitive.
                </div>
                <section ref={passwordVisibility}>
                    <h2 className={style["md-title"]}>ENTER YOUR PASSWORD</h2>
                    <form
                        onSubmit={handlesubmitPassword}
                        className="form-login"
                    >
                        <div className={style["back-arrow"]}>
                            <MdArrowBack onClick={goBack} />
                            <span className={style["color-gray"]}>
                                {userInput.email}
                            </span>
                        </div>
                        <input
                            ref={passwordlRef}
                            type="text"
                            placeholder="Password"
                            id="password"
                            name="password"
                            onChange={onPasswordChange}
                        />
                        <div>
                            <p
                                ref={passwordmessage}
                                className={style["message"]}
                            >
                                Required
                            </p>
                        </div>
                        <a href="#" className={style["forgot"]}>
                            Forgot your password?
                        </a>
                        <input type="submit" value={"Sing in"} name="singIn" />
                    </form>
                </section>

                <div ref={loginSuccessMessage} className={style["success"]}>
                    <div className={style["success-visible"]}>
                        Successfully logged in!
                    </div>
                </div>
            </section>
        </>
    );
};
