import React, { useRef, useState } from "react";
import playIcon from "../assets/img/play-btn.png";
import pauseIcon from "../assets/img/pause-btn.png";

const ShowroomVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-20 bg-neutral-50">
            <div className="container max-w-[90rem] relative">
                <video
                    ref={videoRef}
                    className="w-full h-auto"
                    src="/content/videos/video-showroom.webm"
                    poster="/content/display/6a0c178d672f54a8ac36e3a73b6b503f.jpg"
                />

                <button
                    onClick={togglePlayPause}
                    className="absolute bottom-4 right-4 z-10"
                >
                    <img
                        src={isPlaying ? pauseIcon : playIcon}
                        alt={isPlaying ? "Pause" : "Play"}
                        className="w-10 h-10"
                    />
                </button>
            </div>
        </section>
    );
};

export default ShowroomVideo;