import { Link } from "../Link/Link";
import Styles from "./Header.module.css";
import {CardTour} from "../CardTour/CardTour.js"

export const Header = () => {
  return (
    <div className={Styles.header}>
        <Link text="Лого"/>
        <Link text="ПВП"/>
        <Link text="2"/>
        <Link text="3"/>
        <Link text="4"/>
    </div>
  )
}