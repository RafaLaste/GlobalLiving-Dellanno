import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgPattern from '../assets/img/bg-pattern.jpg';

import { Reveal } from './Reveal';

const AnotherImage: React.FC = () => {
    const bgRef = useRef<HTMLDivElement | null>(null);

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
    }, []);

    return (
        <section
            ref={bgRef}
            className="py-40 bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgPattern})`,
            }}
        >   
            <div className="container max-w-[87rem]">
                <Reveal direction="top">
                    <img src={`/content/display/07aa51406be467f21e3766848ba16d20.jpg`} />
                </Reveal>
            </div>
        </section>
    );
};

export default AnotherImage;