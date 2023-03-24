import Styles from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import Main from "../../Pages/Main/Main";
import About from "../../Pages/About/About.js";
import Equipment from "../../Pages/Equipment/Equipment.js";
import EventsTypes from "../../Pages/EventsTypes/EventsTypes.js";
import FoodInHike from "../../Pages/FoodInHike/FoodInHike.js";
import Supack from "../../Pages/Supack/Supack.js";
import Video from "../../Pages/Video/Video.js";
import WhatIsQuestHike from "../../Pages/WhatIsQuestHike/WhatIsQuestHike.js";
import Excursions from "../../Pages/Excursions/Excursions";
import LeftSideNavbar from "../LeftSideNavbar/LeftSideNavbar";
import NavbarButton from "../NavbarBrand/Components/NavbarButton/NavbarButton";
import MenuIcon from "../../UI/MenuIcon/MenuIcon";
import icon1 from "../../Images/bonfire_fire_icon_250693.png";
import icon2 from "../../Images/plant_eco_ecology_icon_250706.png";
import icon3 from "../../Images/tent_camp_camping_icon_250714.png";
import icon4 from "../../Images/tree_spring_forest_trees_icon_250691.png";
import { Routes, Route, } from "react-router-dom";

export const App = () => {
    return (
        <Router>
            <div className={Styles.app}>
                <NavbarBrand />
                <section className={Styles.contentSection}>
                    <LeftSideNavbar size="big">
                        <NavbarButton to="/" text="ГЛАВНАЯ" />
                        <NavbarButton to="/about" text="О НАС" />
                        <NavbarButton to="/excursions" text="ЭКСКУСРИИ" />
                        <NavbarButton
                            to="/supack"
                            text="SUPACK - ПОХОДНАЯ ЕДА"
                        />
                        <NavbarButton
                            to="/foodInHike"
                            text="ВСЕ О ПИАТНИИ В ПОХОДЕ"
                        />
                        <NavbarButton to="/equipment" text="СНАРЯЖЕНИЕ" />
                        <NavbarButton
                            to="/whatIsQuestHike"
                            text="ЧТО ТАКОЕ КВЕСТ-ПОХОД"
                        />
                        <NavbarButton to="/eventsTypes" text="ВИДЫ ОТДЫХА" />
                        <NavbarButton to="/video" text="НАШИ ФИЛЬМЫ" />
                    </LeftSideNavbar>
                    <LeftSideNavbar size="small">
                        <MenuIcon link={icon2} />
                        <MenuIcon link={icon1} />
                        <MenuIcon link={icon3} />
                        <MenuIcon link={icon4} />
                    </LeftSideNavbar>
                    <Routes>
                        <Route path="*" element={<Main />} />
                        <Route path="/" element={<Main />} />
                        <Route path="about" element={<About />} />
                        <Route path="equipment" element={<Equipment />} />
                        <Route path="eventsTypes" element={<EventsTypes />} />
                        <Route path="foodInHike" element={<FoodInHike />} />
                        <Route path="supack" element={<Supack />} />
                        <Route path="video" element={<Video />} />
                        <Route path="excursions" element={<Excursions />} />
                        <Route
                            path="whatIsQuestHike"
                            element={<WhatIsQuestHike />}
                        />
                    </Routes>
                </section>
                {/* <Footer /> */}
            </div>
        </Router>
    );
};
