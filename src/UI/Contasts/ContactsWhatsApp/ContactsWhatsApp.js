import React from "react";
import Styles from "./ContactsWhatsApp.module.css";
import Icon from "../../../Images/whatsapp-black.svg";

const ContactsWhatsApp = () => {
    return (
        <>
            <a target="_blank" className={Styles.contactsWhatsApp} href="https://wa.me/79789012010">
                <img
                    className={Styles.whatsAppIcon}
                    src={Icon}
                    alt="WHATSAPP"
                />
                НАПИСАТЬ В WHATSAPP
            </a>
        </>
    );
};

export default ContactsWhatsApp;
