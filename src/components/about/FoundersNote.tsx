"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import founderImg from "@/assets/s1winner.jpeg"; // Replace with your asset

export default function FoundersNote() {
	return (
		<section className="py-32 bg-background-dark relative overflow-hidden">
			{/* Soft Ambient Glow */}
			<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_50%,_var(--primary)_0%,transparent_50%)] opacity-[0.03] pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6">
				<div className="grid md:grid-cols-2 items-center gap-16 lg:gap-24">
					{/* Image Side */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						className="relative"
					>
						<div className="relative aspect-[3/4] md:aspect-auto md:h-[700px] rounded-sm overflow-hidden border border-white/10 group">
							<Image
								src={founderImg}
								alt="Julianna Starlight - Creative Director"
								fill
								className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
							/>
							{/* Decorative Gold Frame Overlay */}
							<div className="absolute inset-0 border-[20px] border-primary/5 pointer-events-none" />
						</div>

						{/* Floating Year Tag */}
						<div className="absolute -bottom-6 -right-6 bg-primary px-8 py-4 hidden md:block">
							<p className="text-background-dark font-bold tracking-tighter text-2xl italic">
								Est. 2023
							</p>
						</div>
					</motion.div>

					{/* Content Side */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.8 }}
						className="relative z-10"
					>
						<span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">
							The Visionary
						</span>

						<h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8 tracking-tighter">
							Julianna Starlight
						</h2>

						<div className="relative">
							{/* Decorative Large Quote Mark */}
							<span className="absolute -top-10 -left-8 text-primary/10 text-[10rem] font-serif leading-none select-none">
								&ldquo;
							</span>

							<div className="space-y-6 text-white/60 leading-relaxed relative z-10">
								<p className="text-xl md:text-2xl font-display italic font-light leading-snug text-white/80">
									&ldquo;Fashion should not just be seen; it
									should be felt like a sunbeam on a winter
									afternoon. When I founded Shining Glamstar,
									I wanted to capture that ephemeral glow and
									weave it into every seam.&rdquo;
								</p>

								<div className="pt-10">
									<p className="text-sm font-medium text-white tracking-widest uppercase mb-2">
										Founder & Creative Director
									</p>
									<p className="text-xs text-white/40 max-w-sm leading-relaxed">
										Julianna has been recognized by the
										International Fashion Council for her
										pioneering work in theatrical luminosity
										and sustainable textile innovation.
									</p>
								</div>

								{/* Signature Placeholder */}
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: 1 }}
									className="pt-8"
								>
									<span className="font-elegant text-primary text-4xl opacity-80">
										Harshvardhan
									</span>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
