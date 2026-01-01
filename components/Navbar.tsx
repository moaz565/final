'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: none;
  }

  svg {
    height: 2em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: #1a3c34;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  input:checked + svg {
    transform: rotate(-45deg);
  }

  input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar when video is fully expanded (around 35% scroll through hero)
            const scrollThreshold = window.innerHeight * 0.35;
            setIsVisible(window.scrollY > scrollThreshold);
        };

        // Check on mount
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className={`fixed top-0 w-full z-50 bg-transparent transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
                {/* Logo - Just circle on mobile, pill with name on larger screens */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group flex items-center gap-3 sm:px-1.5 sm:py-1.5 sm:pr-5 sm:bg-cool-grey rounded-full sm:shadow-lg hover:bg-deep-forest transition-all duration-300 cursor-pointer"
                >
                    <div className="size-10 sm:size-9 bg-cool-grey sm:bg-deep-forest rounded-full flex items-center justify-center text-deep-forest sm:text-cool-grey font-bold text-sm group-hover:bg-cool-grey group-hover:text-deep-forest transition-colors duration-300 shadow-lg sm:shadow-none">
                        JD
                    </div>
                    <span className="font-bold text-sm tracking-tight hidden sm:block text-deep-forest group-hover:text-cool-grey transition-colors duration-300">John Doe</span>
                </button>

                {/* Center pill navigation */}
                <div className="hidden md:flex items-center gap-0 px-1 py-1 bg-cool-grey rounded-full shadow-lg">
                    <Link href="#work" className="text-xs font-medium text-deep-forest px-4 py-2 rounded-full hover:bg-deep-forest hover:text-cool-grey transition-colors">
                        Work
                    </Link>
                    <Link href="#services" className="text-xs font-medium text-deep-forest px-4 py-2 rounded-full hover:bg-deep-forest hover:text-cool-grey transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="text-xs font-medium text-deep-forest px-4 py-2 rounded-full hover:bg-deep-forest hover:text-cool-grey transition-colors" scroll={true}>
                        About
                    </Link>
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => {
                        // Scroll to footer
                        const footer = document.getElementById('about');
                        if (footer) {
                            footer.scrollIntoView({ behavior: 'smooth' });
                        }
                        // Dispatch custom event so Footer knows to focus the input
                        window.dispatchEvent(new Event('focus-contact'));
                    }}
                    className="group hidden sm:flex items-center gap-2 px-6 py-2.5 bg-cool-grey text-deep-forest text-sm font-bold rounded-full hover:bg-deep-forest hover:text-cool-grey shadow-lg transition-all duration-300 cursor-pointer"
                >
                    <span>Let's Talk</span>
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-500 group-hover:rotate-[135deg]">arrow_outward</span>
                </button>

                {/* Mobile menu button - Animated Hamburger */}
                <div ref={menuRef} className="md:hidden relative">
                    <HamburgerWrapper className="p-2 bg-cool-grey rounded-full w-10 h-10 shadow-lg">
                        <input
                            type="checkbox"
                            checked={isMenuOpen}
                            onChange={() => setIsMenuOpen(!isMenuOpen)}
                        />
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                            <path className="line" d="M7 16 27 16" />
                        </svg>
                    </HamburgerWrapper>

                    {/* Mobile Menu - Positioned below the hamburger */}
                    {isMenuOpen && (
                        <div className="absolute top-14 right-0 bg-cool-grey rounded-2xl p-4 flex flex-col gap-2 shadow-xl min-w-[180px] z-50">
                            <Link href="#work" className="text-sm font-medium text-deep-forest px-4 py-2 rounded-full hover:bg-deep-forest hover:text-cool-grey transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                                Work
                            </Link>
                            <Link href="#services" className="text-sm font-medium text-deep-forest px-4 py-2 rounded-full hover:bg-deep-forest hover:text-cool-grey transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                                Services
                            </Link>
                            <Link href="#about" className="text-sm font-medium text-deep-forest px-4 py-2 rounded-full hover:bg-deep-forest hover:text-cool-grey transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                                About
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
