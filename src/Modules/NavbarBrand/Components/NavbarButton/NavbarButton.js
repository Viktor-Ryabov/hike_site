import React from 'react'
import Styles from "./NavbarButton.module.css";


const NavbarButton = (props) => {
  return (
    <button className={Styles.button}>{props.text}</button>
  )
}

export default NavbarButton