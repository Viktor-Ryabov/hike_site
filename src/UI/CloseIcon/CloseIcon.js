import Styles from "./CloseIcon.module.css";
import Icon from "../../Images/closeIcon.svg";

const CloseIcon = (props) => {
    return (
        <div className={Styles.closeIcon} onClick={props.setModalDisabled}>
            <img src={Icon} className={Styles.closeIcon} alt="закрыть" />
        </div>
    );
};

export default CloseIcon;
