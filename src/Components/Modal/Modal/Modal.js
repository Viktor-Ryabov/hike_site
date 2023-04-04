import { ModalOwerlay } from "../ModalOwerlay/ModalOwerlay.js";
import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";
import CloseIcon from "../../../UI/CloseIcon/CloseIcon.js";
import Contacts from "../../../Modules/Contasts/Contacts.js";

const Modal = ({ ...props }) => {

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            props.setModalDisabled();
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return ReactDOM.createPortal(
        <section
            className={`${props.active ? Styles.modal_active : ""} ${
                Styles.modal
            } p-10`}
            onClick={escFunction}
        >
            <div className={Styles.modalContainer}>
                <div className={Styles.closeIcon}>
                    <CloseIcon {...props}/>
                </div>
                {/* <img
                    src={props.cardDataFormodal.image}
                    className={Styles.image}
                    alt={props.cardDataFormodal.name}
                /> */}
                <div className={Styles.discription}>
                    <div>
                        <h3 className={Styles.h3}>
                            {props.cardDataFormodal.name}
                        </h3>
                        <p className={Styles.dataText}>
                            {props.cardDataFormodal.hikeLengthTitle}{" "}
                            {props.cardDataFormodal.hikeLength}
                        </p>
                        <p className={Styles.dataText}>
                            {props.cardDataFormodal.droptitle}{" "}
                            {props.cardDataFormodal.drop}
                        </p>
                        <p className={Styles.text}>
                            {props.cardDataFormodal.discription1}
                        </p>
                    </div>
                    {/* <CaptureForm /> */}
                   
                </div>
                {/* <CaptureForm /> */}
                <div className={Styles.connectionSection}>
                        <div className={Styles.brand_title}>
                            Записывайтесь прямо сейчас!
                        </div>
                        <div className={Styles.brand_title}>
                            Горы ждут! 🌄
                        </div>
                        <Contacts />
                    </div>
            </div>

            <ModalOwerlay />
        </section>,
        document.querySelector("#react-modals")
    );
};

export default Modal;
