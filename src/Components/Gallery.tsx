import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgPattern from '../assets/img/bg-pattern.jpg';
import eyeIcon from '../assets/img/eye-icon.png';

import { ImageGallery } from "@/types/ImageGallery";

import { Reveal } from './Reveal';

type GalleryProps = {
    images: ImageGallery[];
    withBackground?: boolean;
};

const Gallery: React.FC<GalleryProps> = ({ images, withBackground }) => {
    const bgRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {  
        if (!withBackground) return;

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
    }, []);

    const galleryRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!galleryRef.current) return;

        const lightbox = new PhotoSwipeLightbox({
            gallery: galleryRef.current,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });

        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, []);

    return (
        <section
            ref={bgRef}
            className={`py-24 bg-no-repeat ${withBackground ? 'bg-cover bg-center' : ''}`}
            style={withBackground ? {
                backgroundImage: `url(${bgPattern})`
            } : {}}
        >
            <div className="container max-w-medium">
                <div ref={galleryRef} className="grid grid-cols-2 gap-8">
                    {images.map((image, index) => (
                        <Reveal key={index} direction="bottom">
                            <a
                                key={index}
                                href={`/content/gallery/${image.img}`}
                                data-pswp-width="1200"
                                data-pswp-height="1050"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative aspect-square overflow-hidden transition-all hover:shadow block"
                            >
                                <img
                                    src={`/content/gallery/${image.img}`}
                                    alt={`Imagem ${index + 1}`}
                                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-40" />
                                <span
                                    className="absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover bg-center bg-no-repeat opacity-0 transition-all duration-300 group-hover:opacity-80"
                                    style={{
                                        backgroundImage: `url(${eyeIcon})`,
                                    }}
                                />
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
