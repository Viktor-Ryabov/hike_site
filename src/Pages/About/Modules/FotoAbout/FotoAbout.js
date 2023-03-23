import Styles from "./FotoAbout.module.css";

const FotoAbout = (props) => {
    console.log(props);
    return (
        <div className={Styles.image}>
            <img
                className={Styles.image}
                src={props.image}
                alt="портрет Натальи"
            />
        </div>
    );
};

export default FotoAbout;
