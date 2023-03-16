import Styles from "./TabItem.module.css";

const TabItem = (title, content) => {
  return (
      <div className={Styles.tabItem}>
        <h3>{title}</h3>
        <p>{content}</p> 
      </div>
  );
}

export default TabItem