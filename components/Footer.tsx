'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialIcons from './SocialIcons';

gsap.registerPlugin(ScrollTrigger);


export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const [footerHeight, setFooterHeight] = useState(0);
    const formRef = useRef<HTMLFormElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const updateHeight = () => {
            if (footerRef.current) {
                // Cap the spacer height at viewport height since footer is fixed.
                // This prevents scrolling "past" the footer into empty space if the footer is tall.
                setFooterHeight(Math.min(footerRef.current.offsetHeight, window.innerHeight));
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        const timer = setTimeout(updateHeight, 100);

        return () => {
            window.removeEventListener('resize', updateHeight);
            clearTimeout(timer);
        };
    }, []);

    // Auto-focus name input when 'focus-contact' event is triggered
    useEffect(() => {
        const handleFocus = () => {
            // Wait a moment for the smooth scroll to start/finish
            setTimeout(() => {
                nameInputRef.current?.focus();
            }, 600);
        };

        window.addEventListener('focus-contact', handleFocus);

        return () => {
            window.removeEventListener('focus-contact', handleFocus);
        };
    }, []);


    // Animate footer elements when the spacer scrolls into view
    useEffect(() => {
        if (!footerRef.current) return;

        // Set initial hidden state
        const headline = footerRef.current.querySelector('.footer-headline');
        const rightContent = footerRef.current.querySelector('.footer-right');

        if (headline) gsap.set(headline, { opacity: 0, y: 60 });
        if (formRef.current) {
            const fields = formRef.current.querySelectorAll('.form-field');
            gsap.set(fields, { opacity: 0, y: 30 });
        }
        if (rightContent) gsap.set(rightContent, { opacity: 0, x: 30 });

        // Create a ScrollTrigger that watches the spacer
        const trigger = ScrollTrigger.create({
            trigger: '#about',
            start: 'top 70%', // Trigger a bit later
            onEnter: () => {
                // Animate headline
                if (headline) {
                    gsap.to(headline, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' });
                }

                // Animate form fields with stagger
                if (formRef.current) {
                    const fields = formRef.current.querySelectorAll('.form-field');
                    gsap.to(fields, { opacity: 1, y: 0, duration: 0.9, stagger: 0.25, ease: 'power2.out', delay: 0.5 });
                }

                // Animate right content
                if (rightContent) {
                    gsap.to(rightContent, { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.8 });
                }
            },
            onLeaveBack: () => {
                // Reset animations when scrolling back up
                if (headline) gsap.set(headline, { opacity: 0, y: 60 });
                if (formRef.current) {
                    const fields = formRef.current.querySelectorAll('.form-field');
                    gsap.set(fields, { opacity: 0, y: 30 });
                }
                if (rightContent) gsap.set(rightContent, { opacity: 0, x: 30 });
            }
        });

        return () => {
            trigger.kill();
        };
    }, []);

    return (
        <>
            {/* 
        Spacer acts as the scroll target for 'About'.
        When the browser scrolls here, it reaches the bottom of the page,
        revealing the fixed footer underneath.
      */}
            <div
                id="about"
                style={{ height: footerHeight }}
                className="relative z-0 pointer-events-none"
            />

            {/* 
        Fixed Footer Container
        - bg-paynes-grey: Matches the Services section so the corners blend.
      */}
            <div className="fixed bottom-0 left-0 w-full z-0 bg-paynes-grey">
                <footer
                    ref={footerRef}
                    className="bg-deep-forest text-white pt-16 md:pt-32 pb-8 md:pb-12 px-4 md:px-12 w-full relative max-h-screen overflow-y-auto"
                >
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    <div className="max-w-[1400px] mx-auto relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
                            <div>
                                <div className="footer-headline">
                                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4 md:mb-6 leading-[0.9]">
                                        Let's build<br />something <span className="text-primary italic">great.</span>
                                    </h2>
                                </div>

                                <form ref={formRef} className="space-y-3 md:space-y-4 max-w-lg">
                                    {/* Name Input */}
                                    <div className="form-field relative group">
                                        <input
                                            ref={nameInputRef}
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-base md:text-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="form-field relative group">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-base md:text-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
                                        />
                                    </div>

                                    {/* Message Input */}
                                    <div className="form-field relative group">
                                        <textarea
                                            placeholder="Tell me about your project..."
                                            rows={1}
                                            className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-base md:text-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300 resize-none min-h-[40px] md:min-h-[50px]"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="form-field pt-2">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 bg-primary text-white font-bold text-sm md:text-base rounded-full hover:bg-white hover:text-deep-forest transition-all duration-300 shadow-xl shadow-primary/20"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="footer-right flex flex-col justify-start md:justify-end md:items-end">
                                <div className="mb-6 md:mb-10">
                                    <SocialIcons />
                                </div>
                                <p className="text-base md:text-xl text-gray-300 max-w-md md:text-right font-light">
                                    Currently available for freelance projects and open to full-time opportunities.
                                </p>
                            </div>
                        </div>
                        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
                            <p>© 2023 John Doe. All rights reserved.</p>
                            <div className="flex gap-4 md:gap-8">
                                <p>San Francisco, CA</p>
                                <p className="font-mono text-primary">Local time: 10:42 AM</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
