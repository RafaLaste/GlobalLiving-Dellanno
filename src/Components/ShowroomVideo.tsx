import React, { useRef, useEffect, useState } from "react";
import playIcon from "../assets/img/play-btn.png";
import pauseIcon from "../assets/img/pause-btn.png";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgPattern from '../assets/img/bg-pattern.jpg';

import { Reveal } from './Reveal';

const ShowroomVideo: React.FC = () => {
    const bgRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
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

    useEffect(() => {  
        gsap.registerPlugin(ScrollTrigger);     
        gsap.fromTo(bgRef.current, 
        {
            backgroundPositionY: '50%',
        },
        {
            backgroundPositionY: '20%',
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: bgRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        const letters = titleRef.current?.querySelectorAll('span span');

        if (letters) {
            gsap.set(letters, {
                opacity: 0,
                rotateY: -90,
                x: -20,
            });

            gsap.to(letters, {
                opacity: 1,
                rotateY: 0,
                x: 0,
                duration: 0.6,
                stagger: 0.04,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        }
    }, []);

    return (
        <section 
            ref={bgRef}
            className="py-20 sm:py-30 bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgPattern})`,
            }}
        >
            <div className="container max-w-large relative">
                <h2
                    ref={titleRef}
                    className="text-2xl md:text-3xl font-medium uppercase text-center mb-8 xl:mb-12 flex justify-center flex-wrap"
                >
                    {'Descubra o Dell Anno Global Living'.split(' ').map((word, i) => (
                        <span key={i} className="inline-block mr-2 whitespace-nowrap">
                            {word.split('').map((char, j) => (
                                <span key={j} className="inline-block">
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </h2>

                <Reveal className="relative mb-14 md:mb-20" direction="bottom">
                    <video
                        ref={videoRef}
                        className="w-full h-auto"
                        src="/content/videos/video-showroom.webm"
                        poster="/content/display/6a0c178d672f54a8ac36e3a73b6b503f.jpg"
                    />

                    <button
                        onClick={togglePlayPause}
                        className="absolute bottom-4 -right-4 md:translate-x-full z-10"
                    >
                        <img
                            src={isPlaying ? pauseIcon : playIcon}
                            alt={isPlaying ? "Pause" : "Play"}
                            className="w-10 h-10"
                        />
                    </button>
                </Reveal>

                <Reveal className="md:text-xl text-center leading-relaxed max-w-5xl px-2 mx-auto" direction="bottom">
                    <p>
                        Hoje em dia, não importa onde você esteja no mundo, morar com estilo, modernidade e sofisticação é um conceito único. O luxo e o prazer de viver não mudam de um lugar para outro. Compreender isto é desenvolver um design cada vez mais universal e, ao mesmo tempo, autêntico e exclusivo.
                    </p>
                    <p>
                        Bem-vindo ao Dell Anno Global Living.
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default ShowroomVideo;