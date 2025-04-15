import { ReactNode, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

import ApercuPro from '../assets/fonts/ApercuPro.woff2';
import ApercuProMedium from '../assets/fonts/ApercuPro-Medium.woff2';
import ApercuProBold from '../assets/fonts/ApercuPro-Bold.woff2';

import { CookieModal } from '../Components/CookieModal';

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
    const [notifyCookie, setNotifyCookie] = useState(false);
    const [trackingEnabled, setTrackingEnabled] = useState(false);
    const lenisRef = useRef<Lenis | null>(null);

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

        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    const acceptCookies = () => {
        setTrackingEnabled(true);
    };

    useEffect(() => {
        const notify = document.cookie
            .split('; ')
            .some((cookie) => cookie.startsWith('notify-cookies=1'));
        setNotifyCookie(notify);
    }, []);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (notifyCookie || trackingEnabled) {
    //             const script = document.createElement('script');
    //             script.innerHTML = `
    //                 (function(w,d,s,l,i){
    //                     w[l]=w[l]||[];
    //                     w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    //                     var f=d.getElementsByTagName(s)[0],
    //                         j=d.createElement(s),
    //                         dl=l!='dataLayer'?'&l='+l:'';
    //                     j.async=true;
    //                     j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    //                     f.parentNode.insertBefore(j,f);
    //                 })(window,document,'script','dataLayer','${dados_site.tag_google}');
    //             `;
    //             document.head.appendChild(script);

    //             const noscript = document.createElement('noscript');
    //             noscript.innerHTML = `
    //                 <iframe src="https://www.googletagmanager.com/ns.html?id=${dados_site.tag_google}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    //             `;
    //             document.body.appendChild(noscript);
    //         }
    //     }, 100);

    //     return () => clearTimeout(timer);
    // }, [notifyCookie, trackingEnabled]);

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

            <main className="min-h-screen font-primary overflow-hidden">
                {children}
            </main>

            {!notifyCookie && (
                <CookieModal
                    acceptCookies={acceptCookies}
                    visible={true}
                />
            )}
        </>
    );
}