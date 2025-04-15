import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Store } from '../Types/Store';
import { StoreList } from '../Data/StoreList'

import bgPattern from '../assets/img/bg-pattern.jpg';
import logo from '../assets/img/logo.png';
import Instagram from '../assets/img/social/instagram.png';
import Facebook from '../assets/img/social/facebook.png';
import Pinterest from '../assets/img/social/pinterest.png';
import Youtube from '../assets/img/social/youtube.png';

import StoreItem from './StoreItem';
import { Reveal } from './Reveal';

const Stores: React.FC = () => {
    const bgRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {  
        gsap.registerPlugin(ScrollTrigger);     
        gsap.fromTo(bgRef.current, 
        {
            backgroundPositionY: '100%',
        },
        {
            backgroundPositionY: '0%',
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: bgRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        if (titleRef.current) {
            const letters = titleRef.current.querySelectorAll('span span');

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
            className="pt-16 sm:pt-30 pt-40 bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgPattern})`,
            }}
        >   
            <div className="container max-w-large">
                <h2
                    ref={titleRef}
                    className="text-2xl md:text-3xl font-medium uppercase text-center mb-10 flex justify-center flex-wrap"
                >
                    {'Padrão global de qualidade'.split(' ').map((word, i) => (
                        <span key={i} className="inline-block mr-1 whitespace-nowrap">
                            {word.split('').map((char, j) => (
                                <span key={j} className="inline-block whitespace-pre">
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </h2>

                <Reveal className="text-xl text-center leading-relaxed max-w-5xl px-2 mx-auto mb-20 md:mb-40" direction="bottom" delay={2}>
                    <p>
                        Nos últimos anos, a evolução da marca Dell Anno atingiu um padrão tão elevado que, hoje, ela está literalmente no topo do mundo, com sua flagship internacional localizada em Nova York.
                    </p>
                </Reveal>
            </div>

            {StoreList.map((item: Store, index: number) => (
                <StoreItem key={index} item={item} index={index} />
            ))}


            <footer className="pt-10 pb-20 sm:pb-36">
                <div className="container max-w-large">
                    <img src={logo} className="block mx-auto mb-8 max-w-40" alt="Dell Anno" />

                    <div className="flex gap-2 justify-center scale-90">
                        <a href="http://instagram.com/dellannooficial" className="bg-black w-10 h-10 flex items-center justify-center transition-all hover:opacity-80">
                            <img src={Instagram} alt="Instagram" />
                        </a>

                        <a href="http://instagram.com/dellannooficial" className="bg-black w-10 h-10 flex items-center justify-center transition-all hover:opacity-80">
                            <img src={Facebook} alt="Facebook" />
                        </a>

                        <a href="http://instagram.com/dellannooficial" className="bg-black w-10 h-10 flex items-center justify-center transition-all hover:opacity-80">
                            <img src={Pinterest} alt="Pinterest" />
                        </a>

                        <a href="http://instagram.com/dellannooficial" className="bg-black w-10 h-10 flex items-center justify-center transition-all hover:opacity-80">
                            <img src={Youtube} alt="Youtube" />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Stores;