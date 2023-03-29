import React from "react";
import Styles from "./MainVideo.module.css";
import video from "../../../../video/video_Arhiz_8_min.mp4";

const MainVideo = () => {
    return (
        <>
            <video
                controls
                src={video}
                type="video/mp4"
                className={Styles.video}
                autoPlay={true}
                loop
                muted
            ></video>
        </>
    );
};

export default MainVideo;
