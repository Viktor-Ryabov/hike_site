import Styles from "./App.module.css";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import Footer from "../Footer/Footer";
import Main from "../../Pages/Main/Main";
import LeftSideNavbar from "../LeftSideNavbar/LeftSideNavbar";
import NavbarButton from "../NavbarBrand/Components/NavbarButton/NavbarButton";
import CloseIcon from "../../UI/CloseIcon/CloseIcon";

export const App = () => {
    return (
        <div className={Styles.app}>
            <NavbarBrand />
            <section className={Styles.contentSection}>
                <LeftSideNavbar size="big">
                    <NavbarButton text="ВСЕ О ПИАТНИИ В ПОХОДЕ" />
                    <NavbarButton text="КВЕСТ-ПОХОД" />
                </LeftSideNavbar>
                <LeftSideNavbar size="small">
                    <CloseIcon />
                </LeftSideNavbar>
                <Main />
            </section>
            <Footer />
        </div>
    );
};
