"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Assuming these are your high-fashion assets
import modelPose from "@/assets/gallery/g8.jpeg";
import garmentDetail from "@/assets/gallery/g3.jpeg";
import model2 from "@/assets/gallery/g10.jpeg";

const stats = [
	{ label: "Host Cities", value: "05" },
	{ label: "Models", value: "500+" },
	{ label: "Designers", value: "45" },
	{ label: "Viewers", value: "1M+" },
];

export default function Season3Announcement() {
	return (
		<section
			className="py-10 md:py-20 bg-background-dark relative overflow-hidden"
			id="season-3"
		>
			{/* Background Accent - Skewed Panel */}
			<div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-24 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
					{/* Left: Content & Stats */}
					<div className="lg:col-span-5">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className="inline-block p-3 rounded-full bg-primary/20 mb-8"
						>
							<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-gold">
								<Star
									className="text-background-dark fill-background-dark"
									size={24}
								/>
							</div>
						</motion.div>

						<h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
							Season 3: <br />
							South India&apos;s <br />
							<span className="italic text-primary">
								Premier Stage
							</span>
						</h2>

						<p className="text-lg text-white/50 mb-12 leading-relaxed font-display">
							This year we are expanding to 5 major cities,
							bringing together the finest craftsmanship and
							modeling talent from across the southern peninsula.
						</p>

						{/* Stats Grid */}
						<div className="grid grid-cols-2 gap-y-10 gap-x-8">
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									viewport={{ once: true }}
								>
									<p className="text-4xl font-black text-primary tracking-tighter mb-1">
										{stat.value}
									</p>
									<p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
										{stat.label}
									</p>
								</motion.div>
							))}
						</div>
					</div>

					{/* Right: Masonry Style Visuals */}
					<div className="lg:col-span-7 relative">
						<div className="grid grid-cols-2 gap-6">
							{/* Column 1 */}
							<div className="space-y-6 pt-12">
								<motion.div
									whileHover={{ y: -10 }}
									className="rounded-2xl overflow-hidden h-72"
								>
									<Image
										src={modelPose}
										alt="Model Pose"
										className="w-full h-full object-cover rounded-[calc(1rem-1px)]"
									/>
								</motion.div>

								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									className="rounded-2xl overflow-hidden h-48 bg-primary p-8 flex flex-col justify-end group cursor-none"
								>
									<p className="text-background-dark font-black text-4xl leading-[0.8] tracking-tighter group-hover:italic transition-all">
										GOLDEN <br /> ERA
									</p>
								</motion.div>
							</div>

							{/* Column 2 */}
							<div className="space-y-6">
								<motion.div
									whileHover={{ y: -10 }}
									className="rounded-2xl overflow-hidden h-48"
								>
									<Image
										src={model2}
										alt="Garment Detail"
										className="w-full h-full object-cover rounded-[calc(1rem-1px)]"
									/>
								</motion.div>
								<motion.div
									whileHover={{ y: -10 }}
									className="rounded-2xl overflow-hidden h-96"
								>
									<Image
										src={garmentDetail}
										alt="Garment Detail"
										className="w-full h-full object-cover rounded-[calc(1rem-1px)]"
									/>
								</motion.div>
							</div>
						</div>

						{/* Floating Decorative Element */}
						<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
					</div>
				</div>
			</div>
		</section>
	);
}
