import Styles from "./LeftSideNavbar.module.css";
import NavbarButton from "../NavbarBrand/Components/NavbarButton/NavbarButton";

const LeftSideNavbar = () => {
    return (
        <div className={Styles.leftSideNavbar}>
            <NavbarButton to="/" text="ГЛАВНАЯ" />
            <NavbarButton to="/about" text="О НАС" />
            
            {/* <NavbarButton to="/equipment" text="СНАРЯЖЕНИЕ" /> */}
            {/* <NavbarButton to="/excursions" text="ЭКСКУСРИИ" /> */}
            {/* <NavbarButton to="/supack" text="SUPACK - ПОХОДНАЯ ЕДА" /> */}
            {/* <NavbarButton to="/foodInHike" text="ПИТАНИЕ В ПОХОДЕ" /> */}
            {/* <NavbarButton to="/whatIsQuestHike" text="ЧТО ТАКОЕ КВЕСТ-ПОХОД" /> */}
            {/* <NavbarButton to="/eventsTypes" text="ВИДЫ ОТДЫХА" /> */}
            <NavbarButton to="/video" text="НАШИ ФИЛЬМЫ" />
            <NavbarButton to="/variants" text="ВАРИАНТЫ ОТДЫХА" scrollTo="#products"/>
        </div>
    );
};

export default LeftSideNavbar;
