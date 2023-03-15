import Styles from "./CloseIcon.module.css";
import Icon from "../../../Images/closeIcon.svg";

const CloseIcon = (props) => {
    console.log(props);
    return (
        <div className={Styles.closeIcon} onClick={props.closeMenu}>
            <img src={Icon} className={Styles.closeIcon} alt="закрыть" />
        </div>
    );
};

export default CloseIcon;
