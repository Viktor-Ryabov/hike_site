import React from "react";
import Styles from "./ContactsTelegramm.module.css";
import Icon from "../../../Images/telegram_icon.svg"

const ContactsTelegramm = () => {
    return (
        <div className={Styles.contactsTelegramm}>
            <img className={Styles.telegrammIcon}src={Icon} alt="телефон"/>
            <a>@motusvita_Crimea</a>
        </div>
    );
};

export default ContactsTelegramm;
