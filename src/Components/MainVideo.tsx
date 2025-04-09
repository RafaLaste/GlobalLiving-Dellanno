import React from 'react';

import videoDesktop from '../assets/videos/video-desktop.mp4';
import videoMobile from '../assets/videos/video-mobile.mp4';

const MainVideo: React.FC = () => {
    return (
        <section className="relative w-full h-auto overflow-hidden">
            <video
                className="hidden md:block w-full h-auto object-cover"
                src={videoDesktop}
                autoPlay
                muted
                loop
                playsInline
            />

            <video
                className="block md:hidden w-full h-auto object-cover"
                src={videoMobile}
                autoPlay
                muted
                loop
                playsInline
            />
        </section>
    );
};

export default MainVideo;