"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import celabrity from "@/assets/s1winner.jpeg";

export default function CelebritySpotlight() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

	return (
		<section
			ref={containerRef}
			className="bg-stone-950 text-white overflow-hidden py-16 md:py-32"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 lg:gap-24">
				{/* Text Side - Reordered for Mobile (Text first, Image second) */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="relative z-10 order-2 lg:order-1"
				>
					<span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block">
						Special Guest Spotlight
					</span>

					{/* Fluid Typography: min 3.5rem, max 10rem */}
					<h2 className="text-[clamp(2.5rem,100%,10rem)] font-black mb-6 md:mb-8 italic tracking-tighter leading-[0.9] text-white overflow-hidden">
						<motion.span
							initial={{ y: "100%" }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.8, ease: "circOut" }}
							className="block"
						>
							SHARAN
						</motion.span>
					</h2>

					<div className="space-y-6 md:space-y-8">
						<p className="text-stone-400 font-display font-light text-base md:text-lg leading-relaxed max-w-md">
							The icon who graced our Season 2 finale with her
							presence. Sharan brought an air of global
							sophistication and shared her journey, cementing her
							status as a true mentor to the Shining Glamstar
							community.
						</p>

						<blockquote className="border-l-2 border-primary pl-4 md:pl-8 py-2 md:py-4 italic text-xl md:text-2xl lg:text-3xl font-serif text-white/90 leading-snug">
							Fashion is the armor to survive the reality of
							everyday life.
						</blockquote>
					</div>
				</motion.div>

				{/* Image Side - Responsive Aspect Ratios */}
				<div className="relative group order-1 lg:order-2 px-4 md:px-0">
					{/* Responsive Border - Hidden on very small screens to avoid overflow */}
					<motion.div
						style={{
							y: useTransform(scrollYProgress, [0, 1], [15, -15]),
						}}
						className="absolute -inset-3 md:-inset-6 border border-primary/20 rounded-sm z-0 pointer-events-none group-hover:border-primary/50 transition-colors duration-500 hidden sm:block"
					/>

					<motion.div style={{ y }} className="relative z-10">
						<div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
							<Image
								src={celabrity}
								alt="Sharan Celebrity Portrait"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								priority
								className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
							/>

							{/* Responsive Floating Tag */}
							<div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-primary text-background-dark px-4 py-2 md:px-6 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[9px] md:text-[10px] shadow-2xl">
								Finale Gala Guest
							</div>
						</div>
					</motion.div>

					{/* Decorative Element - Scale down for mobile */}
					<div className="absolute -top-10 -right-10 w-24 h-24 md:w-40 md:h-40 bg-primary/5 rounded-full blur-3xl" />
				</div>
			</div>
		</section>
	);
}
