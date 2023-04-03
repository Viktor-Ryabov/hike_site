import React from "react";
import Styles from "./CaptureForm.module.css";
import Contacts from "../../Modules/Contasts/Contacts.js";

const CaptureForm = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.connectionSection}>                
                <div className={Styles.brand_title}>Cвяжитесь с нами</div>
                <Contacts />

            </div>

            <div className={Styles.inputs}>
            <div className={Styles.brand_title}>Оставьте заявку</div>
                <input
                    className={Styles.input}
                    type="email"
                    placeholder="Почта"
                />
                <input
                    className={Styles.input}
                    type="password"
                    placeholder="Имя"
                />
                <button className={Styles.button} type="submit">
                    LOGIN
                </button>
            </div>
        </div>
    );
};

export default CaptureForm;
