import Styles from "./ArticleAbout.module.css";

const ArticleAbout = (props) => {
    
    return (
        <div className={Styles.article}>
            {props.text}
        </div>
    );
};

export default ArticleAbout;
