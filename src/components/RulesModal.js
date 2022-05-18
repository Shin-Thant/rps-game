import React, { useContext } from "react";
import "../styles/RulesModal.css";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";
import { Context } from "../hooks/ContextProvider";

export const RulesModal = () => {
    const { setOpen } = useContext(Context);

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                    <h1>RULES</h1>
                    <img
                        src={close}
                        alt="close-icon"
                        className="close-btn"
                        onClick={closeModal}
                    />
                </div>

                <img src={rules} alt="rules" />
            </div>
        </div>
    );
};
