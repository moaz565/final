'use client';

import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TitleReveal from './ui/TitleReveal';

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate Separator Lines
        const separators = gsap.utils.toArray<HTMLElement>('.service-separator');
        separators.forEach((sep) => {
            gsap.to(sep, {
                width: '100%',
                duration: 1.5,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: sep,
                    start: 'top 85%',
                }
            });
        });

        // Fade in Title + Desc
        const items = gsap.utils.toArray<HTMLElement>('.service-item-content');
        items.forEach((item) => {
            gsap.fromTo(item,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2, // Delay after line starts
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-12 max-w-full mx-auto bg-paynes-grey relative z-20 transition-colors duration-500 rounded-t-[2rem] md:rounded-t-[3rem] -mt-8 md:-mt-12" id="services">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-24 self-start text-white relative z-10">
                    <TitleReveal>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Experience &amp;<br />Services</h2>
                    </TitleReveal>
                    <p className="text-gray-200 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                        With over 8 years in the industry, I help companies build scalable solutions. From early-stage startups to established enterprises, I bring technical depth and product vision.
                    </p>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-bold uppercase tracking-wider text-gray-400">Current Role</p>
                        <p className="text-lg md:text-xl font-medium text-white">Creative Front-End Developer</p>
                        <p className="text-sm text-primary font-mono mb-4 md:mb-6">GSAP Expert</p>
                    </div>

                    <Link href="/resume.pdf" className="inline-flex items-center gap-3 px-5 md:px-6 py-3 bg-white text-charcoal rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors shadow-lg shadow-black/10">
                        Download Resume <span className="material-symbols-outlined text-sm">download</span>
                    </Link>
                    <div className="hidden md:block mt-12 pt-12 border-t border-white/20">
                        <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Clients</p>
                        <div className="flex flex-wrap gap-6 grayscale opacity-60">
                            <div className="h-8 w-24 bg-white/20 rounded"></div>
                            <div className="h-8 w-24 bg-white/20 rounded"></div>
                            <div className="h-8 w-24 bg-white/20 rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 gap-6 md:gap-8">
                    {/* Service Item 1 */}
                    <div className="group relative">
                        <div className="service-separator h-[1px] w-0 bg-white/30 mb-4 md:mb-8"></div>
                        <div className="service-item-content p-5 md:p-8 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-black/20">
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl md:text-3xl">web</span>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">Frontend Architecture</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                        Building complex, interactive UIs with React, Vue, and modern CSS frameworks. Focus on accessibility and performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Item 2 */}
                    <div className="group relative">
                        <div className="service-separator h-[1px] w-0 bg-white/30 mb-4 md:mb-8"></div>
                        <div className="service-item-content p-5 md:p-8 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-black/20">
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl md:text-3xl">dns</span>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">Backend Systems</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                        Designing robust APIs and database schemas using Node.js, Python, PostgreSQL, and Redis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Item 3 */}
                    <div className="group relative">
                        <div className="service-separator h-[1px] w-0 bg-white/30 mb-4 md:mb-8"></div>
                        <div className="service-item-content p-5 md:p-8 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-black/20">
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl md:text-3xl">devices</span>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">Mobile Development</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                        Cross-platform mobile applications using React Native. Seamless native-like experiences for iOS and Android.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Item 4 */}
                    <div className="group relative">
                        <div className="service-separator h-[1px] w-0 bg-white/30 mb-4 md:mb-8"></div>
                        <div className="service-item-content p-5 md:p-8 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-black/20">
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl md:text-3xl">cloud_sync</span>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">DevOps &amp; Cloud</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                        CI/CD pipelines, Docker containerization, and AWS infrastructure management (Terraform/CDK).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
