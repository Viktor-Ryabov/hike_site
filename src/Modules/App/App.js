import Styles from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import Main from "../../Pages/Main/Main";
import About from "../../Pages/About/About.js";
import LeftSideSpacer from "../LeftSideSpacer/LeftSideSpacer";
// import Equipment from "../../Pages/Equipment/Equipment.js";
// import EventsTypes from "../../Pages/EventsTypes/EventsTypes.js";
// import FoodInHike from "../../Pages/FoodInHike/FoodInHike.js";
import Supack from "../../Pages/Supack/Supack.js";
import {VideoPage} from "../../Pages/VideoPage/VideoPage.js";
import WhatIsQuestHike from "../../Pages/WhatIsQuestHike/WhatIsQuestHike.js";
// import Excursions from "../../Pages/Excursions/Excursions";
import LeftSideNavbar from "../LeftSideNavbar/LeftSideNavbar";
import { Routes, Route } from "react-router-dom";

export const App = () => {
    return (
        <Router>
            <div className={Styles.app}>
                <NavbarBrand />
                <section className={Styles.contentSection}>
                    <LeftSideNavbar />
                    <LeftSideSpacer />
                    <Routes>
                        <Route path="*" element={<Main />} />
                        <Route path="/" element={<Main />} />
                        <Route path="about" element={<About />} />
                        {/* <Route path="equipment" element={<Equipment />} />
                        <Route path="eventsTypes" element={<EventsTypes />} />
                        <Route path="foodInHike" element={<FoodInHike />} /> */}
                        <Route path="supack" element={<Supack />} />
                        <Route path="video" element={<VideoPage />} />
                        {/* <Route path="excursions" element={<Excursions />} /> */}
                        <Route
                            path="whatIsQuestHike"
                            element={<WhatIsQuestHike />}
                        />
                    </Routes>
                </section>
            </div>
        </Router>
    );
};
