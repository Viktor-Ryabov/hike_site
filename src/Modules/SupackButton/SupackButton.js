import Styles from "./SupackButton.module.css";

const SupackButton = () => {
    return (
        <div className={Styles.button}>
            <p className={Styles.h4}>Su | pack</p>
            <p className={Styles.text}>походная еда</p>
        </div>
    );
};

export default SupackButton;
