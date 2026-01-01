'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface TitleRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function TitleReveal({ children, className = '', delay = 0 }: TitleRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            textRef.current,
            { y: '100%' },
            {
                y: '0%',
                duration: 1.2,
                ease: 'power3.out',
                delay: delay,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`overflow-hidden ${className}`}>
            <div ref={textRef} className="will-change-transform">
                {children}
            </div>
        </div>
    );
}
