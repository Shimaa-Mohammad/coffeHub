"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

function HeroSection() {
    const backgrounds = [
        "/assets/home-bg.png",
        "/assets/home-bg2.png",
        "/assets/home-bg3.png",
        "/assets/home-bg4.png",
    ];

    return (
        <section className="relative min-h-[90vh] overflow-hidden">

            {/* Background Slider */}
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1500}
                className="absolute inset-0 z-0"
            >
                {backgrounds.map((bg, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-[90vh]"
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                    </SwiperSlide>
                ))}


            </Swiper>

            {/* Overlay optional */}
            <div className="absolute inset-0 bg-black/20 z-10">
            

            {/* Content ثابت */}
            <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[90vh] px-8 md:px-16 py-12">

                <div className="flex flex-col items-start gap-6 max-w-xl">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                        Discover the{" "}
                        <span className="text-amber-400">best drinks</span>{" "}
                        near you
                    </h1>

                    <p className="text-white text-lg leading-relaxed">
                        Explore top-rated bars, cafés, and cocktail lounges around your area.
                    </p>

                    <div className="flex items-center gap-4 mt-2">
                        <Link
                            href="/menue"
                            className="px-6 py-3 text-amber-50 hover:text-amber-900 bg-amber-700 hover:bg-amber-300 font-semibold rounded-sm transition-all duration-200 shadow-lg"
                        >
                            Shop Now
                        </Link>

                       <Link
                       href="/coffeGame"
                       className="px-6 py-3 border border-amber-200 text-amber-100 hover:text-white font-semibold rounded-sm transition-all duration-200">
                        
                       play a coffee game
                       </Link>
                       
                    </div>
                </div>

            </div>
            </div>
        </section>
    );
}

export default HeroSection;