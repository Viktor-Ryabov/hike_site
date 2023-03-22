import Styles from "./LogoSection.module.css";
import LogoMountains from "../LogoMountains/LogoMountains";
import Logo from "../Logo/Logo";

const LogoSection = (props) => {
    console.log(props)
    return (
        <section className={Styles.logoSection}>
            <LogoMountains size={props.size} />
            <Logo size={props.size} />
        </section>
    );
};

export default LogoSection;
