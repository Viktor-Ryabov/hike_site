import React from "react";
import Styles from "./ContactsVK.module.css";
import Icon from "../../../Images/vk_black_logo.svg";

const ContactsVK = () => {
    return (
        <>
            <a className={Styles.contactsVK} href="https://vk.com/outdoor_team">
                <img
                    className={Styles.vkIcon}
                    src={Icon}
                    alt="телефон"
                />
                ГРУППА В VK
            </a>
        </>
    );
};

export default ContactsVK;
