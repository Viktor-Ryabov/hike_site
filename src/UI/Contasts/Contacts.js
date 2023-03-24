import React from 'react'
import Styles from "./Contacts.module.css";
import ContactsPhone from './ContactsPhone/ContactsPhone';
import ContactsTelegramm from './ContactsTelegramm/ContactsTelegramm';
import ContactsVK from './ContactsVK/ContactsVK';
import ContactsWhatsApp from './ContactsWhatsApp/ContactsWhatsApp';

const Contacts = () => {
  return (
    <div className={Styles.contacts}>
      <ContactsPhone />
      <ContactsTelegramm />
      <ContactsVK />
      <ContactsWhatsApp />

      
    </div>
  )
}

export default Contacts