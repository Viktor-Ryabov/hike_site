import Styles from "./ActionButton.module.css"

const ActionButton = (props) => {
    return(
        <>
            <a href="#" className={Styles.button}>
                {props.text}<span className={Styles.flare}></span>
            </a>
        </>
    )
}

export default ActionButton;