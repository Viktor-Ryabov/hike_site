import { Link } from "react-router-dom";
import Styles from "./SupackButton.module.css";

const SupackButton = () => {
    return (
        <Link to="/supack" className={Styles.button}>
            <p className={Styles.h4}>Su | pack</p>
            <p className={Styles.text}>походная еда</p>
        </Link>
    );
};

export default SupackButton;
