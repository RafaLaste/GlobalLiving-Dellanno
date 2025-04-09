import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgPattern from '../assets/img/bg-pattern.jpg';

import { Reveal } from './Reveal';

const Welcome: React.FC = () => {
    const bgRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);

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

        const letters = titleRef.current.querySelectorAll('span');

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
    }, []);

    return (
        <section
            ref={bgRef}
            className="pt-50 pb-40 bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgPattern})`,
            }}
        >   
            <div className="container max-w-large">
                <h2
                    ref={titleRef}
                    className="text-3xl font-medium uppercase text-center mb-10 flex justify-center flex-wrap"
                >
                    {'Descubra o Dell Anno Global Living'.split('').map((char, i) => (
                        <span key={i} className="inline-block whitespace-pre">
                            {char}
                        </span>
                    ))}
                </h2>

                <Reveal className="text-xl text-center leading-relaxed max-w-5xl px-2 mx-auto" direction="bottom" delay="2">
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

export default Welcome;