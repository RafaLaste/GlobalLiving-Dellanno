import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type RevealProps = {
    children: ReactNode;
    direction?: 'left' | 'right' | 'top' | 'bottom' | 'default';
    delay?: number;
    reverse?: boolean;
    className?: string;
};

export const Reveal: React.FC<RevealProps> = ({
    children,
    direction = 'bottom',
    delay = 0,
    reverse = false,
    className,
}) => {
    const directions: Record<string, { x: string; y: string }> = {
        left: { x: '-20%', y: '0%' },
        right: { x: '20%', y: '0%' },
        top: { x: '0%', y: '-20%' },
        bottom: { x: '0%', y: '20%' },
        default: { x: '0%', y: '10%' },
    };

    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let mm = gsap.matchMedia();
        gsap.registerPlugin(ScrollTrigger);

        mm.add('(min-width: 768px)', () => {
            gsap.fromTo(
                elementRef.current,
                {
                    x: directions[direction]?.x,
                    y: directions[direction]?.y,
                    opacity: 0,
                },
                {
                    x: '0%',
                    y: '0%',
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power2.out',
                    delay: delay * 0.1,
                    scrollTrigger: {
                        trigger: elementRef.current,
                        start: 'top 80%',
                        end: 'bottom',
                        toggleActions: reverse ? 'play none resume reverse' : 'play none none none',
                    },
                }
            );
        });

        mm.add('(max-width: 767px)', () => {
            gsap.fromTo(
                elementRef.current,
                {
                    y: '20%',
                    opacity: 0,
                },
                {
                    y: '0',
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power2.out',
                    delay: delay * 0.1,
                    scrollTrigger: {
                        trigger: elementRef.current,
                        start: 'bottom 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, [delay, direction, reverse]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};
