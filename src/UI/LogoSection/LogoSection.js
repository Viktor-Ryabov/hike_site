import Styles from "./LogoSection.module.css";
import LogoMountains from "../LogoMountains/LogoMountains";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const LogoSection = (props) => {
    return (
        <Link to="/" className={Styles.logoSection}>
                <LogoMountains size={props.size} />
                <Logo size={props.size} />
        </Link>
    );
};

export default LogoSection;
