import React from 'react'
import Styles from "./Contacts.module.css";
import ContactsPhone from './ContactsPhone/ContactsPhone';
import ContactsTelegramm from './ContactsTelegramm/ContactsTelegramm';

const Contacts = () => {
  return (
    <div className={Styles.contacts}>
      <ContactsPhone />
      <ContactsTelegramm />
    </div>
  )
}

export default Contacts