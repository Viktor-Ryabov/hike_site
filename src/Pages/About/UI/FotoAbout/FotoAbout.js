import Styles from "./FotoAbout.module.css";

const FotoAbout = (props) => {
    return (
            <img
                className={Styles.image}
                src={props.image}
                alt="портрет"
            />
    );
};

export default FotoAbout;
