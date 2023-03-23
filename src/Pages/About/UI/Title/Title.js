import Styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={Styles.title}>{props.name}</div>
  )
}

export default Title