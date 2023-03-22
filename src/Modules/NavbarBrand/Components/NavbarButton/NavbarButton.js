import React from 'react'
import Styles from "./NavbarButton.module.css";
import { Link } from 'react-router-dom';


const NavbarButton = (props) => {
  return (
    <Link to={props.to} className={Styles.button}>{props.text}</Link>
  )
}

export default NavbarButton