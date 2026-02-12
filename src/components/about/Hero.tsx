"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	// Parallax effects for a premium feel
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<header
			ref={containerRef}
			className="relative py-48 overflow-hidden bg-background-dark"
		>
			{/* Animated Glow Background */}
			<motion.div
				style={{ y, opacity }}
				className="absolute inset-0 z-0 pointer-events-none"
			>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,transparent_70%)] opacity-10" />
			</motion.div>

			<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
				>
					<span className="text-primary tracking-[0.6em] uppercase text-[10px] font-bold mb-8 block">
						Established 2023
					</span>

					<h1 className="text-7xl md:text-[10rem] font-serif font-light tracking-tighter mb-12 text-white leading-none">
						Our{" "}
						<span className="italic font-light text-primary">
							Story
						</span>
					</h1>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
						className="max-w-2xl mx-auto"
					>
						<p className="text-lg md:text-2xl text-white/50 font-display font-light leading-relaxed">
							Defining the intersection of{" "}
							<span className="text-white">light and fabric</span>
							. Shining Glamstar is more than a fashion show; it
							is a curated movement of luminance and southern
							heritage.
						</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Subtle Bottom Border Line */}
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				transition={{ delay: 0.8, duration: 1.5 }}
				className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
			/>
		</header>
	);
}
