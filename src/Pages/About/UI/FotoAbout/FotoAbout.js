import Styles from "./FotoAbout.module.css";

const FotoAbout = (props) => {
    return (
        <div className={Styles.imageBlock}>
            <img className={Styles.image} src={props.image} alt="портрет" />
        </div>
    );
};

export default FotoAbout;
