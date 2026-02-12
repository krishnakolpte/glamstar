"use client";

import { motion } from "framer-motion";

export default function CTASection() {
	return (
		<section
			className="py-24 bg-primary relative overflow-hidden"
			id="register"
		>
			{/* Background Decorative Text - "Season 03" Marquee */}
			<div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-10 pointer-events-none select-none">
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: "-50%" }}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
					className="flex whitespace-nowrap text-[15rem] font-black uppercase text-background-dark"
				>
					<span className="mx-10">Shining Glamstar</span>
					<span className="mx-10">Shining Glamstar</span>
				</motion.div>
			</div>

			<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-5xl md:text-7xl font-serif font-bold text-background-dark mb-8 tracking-tighter">
						Ready to define <br /> the{" "}
						<span className="italic">future?</span>
					</h2>

					<p className="text-background-dark/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
						Join hundreds of visionaries this season. <br />
						<span className="font-bold border-b border-background-dark/30">
							Registration closes on September 30th.
						</span>
					</p>

					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						{/* Primary Button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto px-12 py-5 bg-background-dark text-white font-bold rounded-full shadow-2xl uppercase tracking-[0.2em] text-xs transition-all hover:bg-zinc-900"
						>
							Register as Model
						</motion.button>

						{/* Secondary Button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-background-dark text-background-dark font-bold rounded-full uppercase tracking-[0.2em] text-xs transition-all hover:bg-background-dark hover:text-white"
						>
							Designer Inquiry
						</motion.button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
