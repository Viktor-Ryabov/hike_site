import { ModalOwerlay } from "../ModalOwerlay/ModalOwerlay.js";
import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";
import CloseIcon from "../../../UI/CloseIcon/CloseIcon.js"

const Modal = ({ ...props }) => {
    const escFunction = () => {
        props.setModalDisabled()
        console.log("escFunction")
    }

    return ReactDOM.createPortal(
        <section
            className={`${props.active ? Styles.modal_active : ""} ${
                Styles.modal
            } p-10`}
            onClick={escFunction}
        >
            <div className={Styles.modalContainer}>
                <div className={Styles.closeIcon}>
                    <CloseIcon
                        onClick={() => {
                            props.setModalDisabled();
                        }}
                    />
                </div>
                <>{props.children}</>
            </div>

            <ModalOwerlay />
        </section>,
        document.querySelector("#react-modals")
    );
};

export default Modal;