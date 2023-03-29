import React from "react";
import Styles from "./MainVideo.module.css";
import video from "../../../../video/video_Arhiz_8_min.mp4";

const MainVideo = () => {
    return (
        <>
            <video controls autoPlay loop muted>
                <source
                    src={video}
                    type="video/mp4"
                    loop
                    muted
                    className={Styles.video}
                    controls
                    autoPlay={true}
                ></source>
            </video>
        </>
    );
};

export default MainVideo;
