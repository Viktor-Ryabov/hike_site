import React from "react";
import Styles from "./ContactsTelegramm.module.css";
import Icon from "../../../Images/telegram_icon.svg";

const ContactsTelegramm = () => {
    return (
        <>
            <a className={Styles.contactsTelegramm} href="https://t.me/@rya_lt">
                <img
                    className={Styles.telegrammIcon}
                    src={Icon}
                    alt="телефон"
                />
                @motusvita_Crimea
            </a>
        </>
    );
};

export default ContactsTelegramm;
