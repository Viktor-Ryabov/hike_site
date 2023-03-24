import React from "react";
import Styles from "./ContactsPhone.module.css";
import Icon from "../../../Images/phone-symbol.svg"

const ContactsPhone = () => {
    return (
        <a className={Styles.contactsPhone} href="tel:+79789012010">
            <img className={Styles.iconPhone}src={Icon} alt="телефон"/>
            +7 (978) 901-2010
        </a>
    );
};

export default ContactsPhone;
