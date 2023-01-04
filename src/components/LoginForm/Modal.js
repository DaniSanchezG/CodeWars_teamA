import React from "react";
import style from './Modal.module.css'
import { MdClose } from "react-icons/md";
import logoWars from "../../assets/img/codeWars2.png";
import logoDisney from '../../assets/img/code4.png'

export const Modal = ({ children, estado, cambiarEstado }) => {
    console.log(estado);

    return (
        <>
            {estado === true && (
                <div className={style["modal-overlay"]}>
                    <div className={style["contenedor-modal"]}>
                        <div className={style["md-heading"]}>
                        <img src={logoDisney} alt="codedisney" className="logo"/><small>account</small>
                            <div className="logo-container">
                                <img src={logoWars} alt="codewars" className="logo" />
                            </div>
                        </div>
                        <div
                            className={style["close-button"]}
                            onClick={() => cambiarEstado(false)}
                        >
                            <MdClose /> {/* icono cierre */}
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};
