"use client";

import { motion } from "framer-motion";
import { LucideIcon, Trophy, Star, Award } from "lucide-react";
import Image, { StaticImageData } from "next/image";

// 1. Icon Mapping inside the Client Component
const IconMap: Record<string, LucideIcon> = {
	trophy: Trophy,
	star: Star,
	award: Award,
};

interface Winner {
	name: string;
	title: string;
	quote: string;
	icon: string; // Serialized string from server
	image: StaticImageData;
	delay: number;
}

interface WinnersSectionProps {
	season: number;
	WINNERS: Winner[];
}

export default function WinnersSection({
	season,
	WINNERS,
}: WinnersSectionProps) {
	return (
		<section className="py-32 bg-stone-950 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				{/* Header Section */}
				<div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
					<div>
						<motion.h2
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-6xl font-serif italic text-white mb-6"
						>
							The{" "}
							<span className="text-primary not-italic">
								Champions
							</span>
						</motion.h2>
						<motion.div
							initial={{ width: 0 }}
							whileInView={{ width: 80 }}
							className="h-1 bg-primary"
						/>
					</div>
					<p className="text-white/40 max-w-xs text-[10px] uppercase tracking-[0.3em] md:text-right leading-relaxed font-bold">
						Honoring the exceptional talent of Season {season}{" "}
						finalists who redefined the runway.
					</p>
				</div>

				{/* Winners Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{WINNERS.map((winner, idx) => {
						// 2. DYNAMICALLY RESOLVE THE ICON HERE
						const IconComponent = IconMap[winner.icon] || Star;

						return (
							<motion.div
								key={`${winner.name}-${idx}`}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.8,
									delay: winner.delay,
								}}
								viewport={{ once: true }}
								className="group relative bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-primary/50 transition-colors duration-500"
							>
								{/* Image Container */}
								<div className="relative h-[450px] overflow-hidden">
									<Image
										src={winner.image}
										alt={winner.name}
										fill
										className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
									/>

									{/* Glass Badge - Using the resolved IconComponent */}
									<div className="absolute top-6 left-6 w-12 h-12 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center text-primary shadow-2xl z-20">
										<IconComponent size={20} />
									</div>

									<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
								</div>

								{/* Content */}
								<div className="p-8 relative">
									<h3 className="text-2xl font-serif text-white mb-1 group-hover:text-primary transition-colors">
										{winner.name}
									</h3>
									<p className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
										{winner.title}
									</p>
									<p className="text-white/50 text-sm leading-relaxed italic font-light">
										&ldquo;{winner.quote}&rdquo;
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
