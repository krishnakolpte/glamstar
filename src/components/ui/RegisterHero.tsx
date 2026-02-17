"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function RegisterHero() {
	return (
		<section className="relative w-full min-h-[60vh] lg:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-background-dark py-12 md:py-20">
			{/* BACKGROUND ELEMENTS - Optimized for performance */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-primary/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

			<motion.div
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
				className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[80px] md:blur-[100px]"
			/>

			<div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
				{/* Main Heading Container - Fixed Layout Issues */}
				<div className="relative inline-block w-full max-w-4xl">
					<h2 className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.5em] md:tracking-[0.8em] font-light mb-2 md:mb-4">
						Shining Glam Star Presents
					</h2>

					<div className="relative">
						<h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-serif italic leading-[0.9] text-white selection:text-black">
							Season{" "}
							<span className="not-italic inline-block text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/80 to-primary/40 drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]">
								03
							</span>
						</h1>

						{/* Underline Decoration */}
						<motion.div
							initial={{ width: 0 }}
							whileInView={{ width: "60%" }}
							transition={{ duration: 1.2, ease: "circOut" }}
							className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
						/>
					</div>
				</div>

				{/* Tagline - Fluid typography */}
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="mt-8 md:mt-12 text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-white/70 max-w-xl md:max-w-2xl mx-auto leading-relaxed italic px-4"
				>
					Where elegance meets the{" "}
					<span className="text-primary font-medium not-italic">
						Extraordinary
					</span>
					. Your journey to the global stage begins here.
				</motion.p>

				{/* Feature Grid - Adaptive Columns */}
				<div className="mt-12 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
					{[
						{ label: "Elite", value: "Mentorship" },
						{ label: "Global", value: "Exposure" },
						{ label: "Premium", value: "Portfolio" },
						{ label: "Direct", value: "Entry" },
					].map((item, index) => (
						<motion.div
							key={index}
							whileHover={{
								y: -5,
								backgroundColor: "rgba(255,255,255,0.05)",
							}}
							className="p-4 md:p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300"
						>
							<p className="text-[8px] md:text-[10px] uppercase tracking-widest text-primary mb-1">
								{item.label}
							</p>
							<p className="text-sm md:text-lg font-serif italic text-white/90">
								{item.value}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
