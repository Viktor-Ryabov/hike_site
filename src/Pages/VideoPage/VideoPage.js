import Styles from "./VideoPage.module.css";
import { VideoModule } from "./VideoModule/VideoModule";
import { videoBank } from "./constants/videoConstants.js";

export const VideoPage = () => {
    return (
        <ul className={Styles.videoPage}>
            {videoBank.map((video) => (
                <VideoModule
                    title={video.title}
                    date={video.date}
                    src={video.src}
                    key={video.id}
                />
            ))}
            <h4 className={Styles.newVideo}>Здесь скоро появится следующее видео 🌄</h4>
        </ul>
    );
};
