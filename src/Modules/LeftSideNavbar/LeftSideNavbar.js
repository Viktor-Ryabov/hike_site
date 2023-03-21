import Styles from "./LeftSideNavbar.module.css";

const LeftSideNavbar = (props) => {
    return (
        <div className={props.size == "big" ? Styles.leftSideNavbar : Styles.leftSideNavbarSmall}>
            {props.children}
        </div>
    );
};

export default LeftSideNavbar;
