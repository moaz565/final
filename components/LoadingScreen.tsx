'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';

interface LoadingScreenProps {
    children: React.ReactNode;
    minLoadTime?: number; // Minimum time to show loader in ms
}

export default function LoadingScreen({ children, minLoadTime = 3000 }: LoadingScreenProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Wait for minimum load time, then start fade out
        const timer = setTimeout(() => {
            setIsFadingOut(true);
            // After fade animation completes, hide the loader
            setTimeout(() => {
                setIsLoading(false);
            }, 800); // Match the fade-out duration
        }, minLoadTime);

        return () => clearTimeout(timer);
    }, [minLoadTime]);

    return (
        <>
            {isLoading && (
                <div
                    className={`fixed inset-0 z-[100] bg-cool-grey flex items-center justify-center transition-opacity duration-800 ${isFadingOut ? 'opacity-0' : 'opacity-100'
                        }`}
                    style={{ transitionDuration: '800ms' }}
                >
                    <Loader />
                </div>
            )}
            <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </>
    );
}
