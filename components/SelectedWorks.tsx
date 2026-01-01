'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TitleReveal from './ui/TitleReveal';

export default function SelectedWorks() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Bento Hub Grid Stagger
        gsap.from('.bento-card', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
        });

        // Parallax Images
        const cards = gsap.utils.toArray<HTMLElement>('.bento-card-image-wrapper');
        cards.forEach((card) => {
            const img = card.querySelector('img');
            if (img) {
                gsap.to(img, {
                    yPercent: 15, // Move image slower than scroll
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    }
                });
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="px-6 md:px-12 py-24 bg-cool-grey rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)] relative z-10" id="work">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-end justify-between mb-16">
                    <div className="text-white">
                        <TitleReveal>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Works</h2>
                        </TitleReveal>
                        <p className="text-gray-200 max-w-md mt-4">A collection of projects that define my approach to digital product design and development.</p>
                    </div>
                    <Link href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-white text-gray-200 transition-colors group">
                        All Projects
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6">
                    {/* Card 1: Nova Dashboard */}
                    <div className="bento-card group col-span-1 md:col-span-2 row-span-2 relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-gray-900 cursor-pointer overflow-hidden transform-gpu transition-transform duration-500 hover:scale-[0.98]">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                        <div className="bento-card-image-wrapper h-full w-full overflow-hidden">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVk6XcFNbLRvt592MFIe0iAmQzt07rBswHwC-ZW6Crn_iSN7-lTgIJ0SP1FUkz6C5FQLUu6OQBpOxKefsZ425xbEIc15KpGc27lCbHzaJXfSymi0mDG4ERZ7A5ru_JaW3Jn2oDVow2zrQAAZycu3Fnwq-_anH6FzZiV4KNYvZWPsg3sABxR9BJuH_qtjj-2439e9ndYYsF5ADsZwRCyuGvOPCOJaksfsB0pPK_v56Go_nZGgy23vBoAWkQbdCNhdSsayoHENIqnOM2"
                                alt="Abstract minimalist architecture"
                                width={800}
                                height={800} // Increased height for parallax
                                className="w-full h-[120%] object-cover transition-transform duration-700 ease-out group-hover:scale-110 -mt-[10%]"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <div className="flex items-center gap-3 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">Fintech</span>
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full">React</span>
                            </div>
                            <h3 className="text-white text-4xl font-bold mb-2">Nova Dashboard</h3>
                            <p className="text-gray-200 text-lg opacity-90 group-hover:text-white transition-colors">Real-time financial analytics platform for enterprise.</p>
                        </div>
                        <div className="absolute top-8 right-8 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <span className="material-symbols-outlined text-black">arrow_outward</span>
                        </div>
                    </div>

                    {/* Card 2: GitHub Stats */}
                    <div className="bento-card col-span-1 rounded-3xl bg-white p-8 flex flex-col justify-between border border-gray-100 transform-gpu transition-transform duration-500 hover:scale-[0.98]">
                        <div className="w-14 h-14 rounded-2xl bg-soft-grey text-primary flex items-center justify-center mb-4 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">code</span>
                        </div>
                        <div>
                            <p className="text-5xl font-bold mb-1 tracking-tight text-charcoal">1.2k</p>
                            <p className="text-sm text-gray-500 font-medium mt-2">Contributions to Open Source in 2023</p>
                        </div>
                        <Link href="#" className="mt-6 text-sm font-bold text-cool-grey flex items-center gap-2 hover:text-primary transition-colors group">
                            <span>View GitHub</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Card 3: Lumina App */}
                    <div className="bento-card group col-span-1 rounded-3xl overflow-hidden relative bg-charcoal transform-gpu transition-transform duration-500 hover:scale-[0.98]">
                        <div className="bento-card-image-wrapper h-full w-full overflow-hidden">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmjcKb2I6ADPb8cuqNcHj-mKQYKiTBoCsCKjSkEtj7DC2YZK-sta98nWXndJ2xAT8VSKv7MSJ4mfHtO_viQE1jC3blQV813gqgEu5ZXm607xqe3TRh_sTPS2YCoQ829wpFSnCFeTxnQv5ldiiCqQn36IDkZgDyVD8PIe9zvSTtfNS5BG_JMJI1OWpA163KmcT8Q5EwieF2iIQf2QpmN5TZlkntIbFopmzGtDa-fr_91aDtHZJu2c7Qnw_FUM8PB9nLd7gR2VL4hluW"
                                alt="Dark moody phone mockup"
                                width={600}
                                height={600}
                                className="w-full h-[120%] object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 mix-blend-overlay -mt-[10%] group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-between p-8">
                            <div className="self-end w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-sm">smartphone</span>
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold">Lumina App</h3>
                                <p className="text-gray-400 text-sm mt-1">iOS / React Native</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Vanguard Commerce */}
                    <div className="bento-card group col-span-1 md:col-span-2 rounded-3xl bg-charcoal text-white p-10 relative overflow-hidden transform-gpu transition-transform duration-500 hover:scale-[0.98]">
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md inline-block">
                                    <span className="material-symbols-outlined text-white">shopping_bag</span>
                                </div>
                                <span className="text-xs font-mono text-gray-400 border border-white/20 px-3 py-1 rounded-full">2023</span>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-3xl font-bold mb-3">Vanguard Commerce</h3>
                                <p className="text-gray-400 text-base max-w-md leading-relaxed">Headless Shopify solution with Next.js 14 and Sanity CMS. Achieving a perfect 100 Lighthouse score.</p>
                            </div>
                        </div>
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500"></div>
                    </div>

                    {/* Card 5: Latest Writing */}
                    <div className="bento-card col-span-1 rounded-3xl bg-white border border-gray-100 p-8 flex flex-col shadow-sm transform-gpu transition-transform duration-500 hover:scale-[0.98]">
                        <div className="flex-1">
                            <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wide mb-4">Latest Writing</span>
                            <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2 text-charcoal">Mastering Server Components in Next.js</h3>
                            <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">A deep dive into the new rendering patterns introduced in Next.js 13+ and how to leverage them effectively.</p>
                        </div>
                        <div className="mt-6 flex items-center gap-3 text-xs font-medium text-gray-400 border-t border-gray-100 pt-4">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 5 min read</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>Oct 12</span>
                        </div>
                    </div>

                    {/* Card 6: Full Stack */}
                    <div className="bento-card col-span-1 rounded-3xl bg-primary text-white p-8 flex flex-col justify-center items-center text-center relative overflow-hidden transform-gpu transition-transform duration-500 hover:scale-[0.98]">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <span className="material-symbols-outlined text-6xl mb-4 opacity-100 relative z-10">layers</span>
                        <h3 className="font-bold text-2xl mb-3 relative z-10">Full Stack</h3>
                        <div className="flex flex-wrap justify-center gap-2 mt-2 relative z-10">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">Node</span>
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">Python</span>
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">AWS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
