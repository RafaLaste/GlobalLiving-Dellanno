import { ReactNode, useEffect, useRef } from 'react';

import Lenis from 'lenis';

import ApercuPro from '../assets/fonts/ApercuPro.woff2';
import ApercuProMedium from '../assets/fonts/ApercuPro-Medium.woff2';
import ApercuProBold from '../assets/fonts/ApercuPro-Bold.woff2';

interface DefaultLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

export default function DefaultLayout({
    children,
    title = 'Global Living | Dell Anno',
    description = 'O luxo e o prazer de viver não mudam de um lugar para outro.',
}: DefaultLayoutProps) {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @font-face {
                font-family: 'Apercu Pro';
                src: url(${ApercuPro}) format('woff2');
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: 'Apercu Pro';
                src: url(${ApercuProMedium}) format('woff2');
                font-weight: 500;
                font-style: normal;
            }
            @font-face {
                font-family: 'Apercu Pro';
                src: url(${ApercuProBold}) format('woff2');
                font-weight: bold;
                font-style: normal;
            }
        `;
        document.head.appendChild(style);
    }, []);

    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        if (lenisRef.current) {
            return () => {
                lenisRef.current?.destroy();
            };
        }
    }, []);

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description || ''} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Octal Web" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description || ''} />
            <meta property="og:image" content="/assets/preview.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://global-living.meusite.com" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description || ''} />
            <meta name="twitter:image" content="/assets/preview.jpg" />

            <main className="min-h-screen font-primary">{children}</main>
        </>
    );
}
