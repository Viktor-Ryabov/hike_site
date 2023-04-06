import Styles from "./Title.module.css";

const Title = (props) => {
    return (
        <div
            className={
                Styles.title +
                " " +
                `${
                    props.orientation === "Left"
                        ? Styles.fotoLeft
                        : Styles.fotoRight
                }`
            }
        >
            {props.name}
        </div>
    );
};

export default Title;
