import Styles from "./App.module.css";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import Footer from "../Footer/Footer";
import Main from "../../Pages/Main/Main";
import LeftSideNavbar from "../LeftSideNavbar/LeftSideNavbar";
import NavbarButton from "../NavbarBrand/Components/NavbarButton/NavbarButton";
import MenuIcon from "../../UI/MenuIcon/MenuIcon";
import icon1 from "../../Images/bonfire_fire_icon_250693.png";
import icon2 from "../../Images/plant_eco_ecology_icon_250706.png";
import icon3 from "../../Images/tent_camp_camping_icon_250714.png";
import icon4 from "../../Images/tree_spring_forest_trees_icon_250691.png";

export const App = () => {
    return (
        <div className={Styles.app}>
            <NavbarBrand />
            <section className={Styles.contentSection}>
                <LeftSideNavbar size="big">
                    <NavbarButton text="О НАС" />
                    <NavbarButton text="SUPACK - ПОХОДНАЯ ЕДА" />
                    <NavbarButton text="ВСЕ О ПИАТНИИ В ПОХОДЕ" />
                    <NavbarButton text="СНАРЯЖЕНИЕ" />
                    <NavbarButton text="ЧТО ТАКОЕ КВЕСТ-ПОХОД" />
                    <NavbarButton text="MAINDMAP АКТИВНОГО ОТДЫХА" />
                </LeftSideNavbar>
                <LeftSideNavbar size="small">
                    <MenuIcon link={icon2}/>
                    <MenuIcon link={icon1}/>
                    <MenuIcon link={icon3}/>
                    <MenuIcon link={icon4}/>
                </LeftSideNavbar>
                <Main />
            </section>
            <Footer />
        </div>
    );
};
