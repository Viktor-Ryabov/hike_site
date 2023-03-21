import React from "react";
import Styles from "./ContactsPhone.module.css";
import Icon from "../../../Images/phone-symbol.svg"

const ContactsPhone = () => {
    return (
        <div className={Styles.contactsPhone}>
            <img className={Styles.iconPhone}src={Icon} alt="телефон"/>
            <a>+7 (978) 901 2010</a>
        </div>
    );
};

export default ContactsPhone;
