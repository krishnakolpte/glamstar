"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Camera, Calendar, Users } from "lucide-react";
import imageVenue from "@/assets/gallery/g1.jpeg";

export default function VenueSummary() {
	return (
		<section className="py-24 max-w-7xl mx-auto px-6">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="bg-stone-100 dark:bg-stone-900 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/5"
			>
				{/* Venue Image with Overlay */}
				<div className="md:w-1/2 relative h-80 md:h-[600px] group overflow-hidden">
					<Image
						src={imageVenue}
						alt="The Grand Plaza Finale"
						fill
						className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />

					{/* Subtle Label for Image */}
					<div className="absolute top-6 left-6">
						<span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/10">
							Featured Venue
						</span>
					</div>
				</div>

				{/* Content Side */}
				<div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white dark:bg-stone-900">
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
					>
						<h3 className="text-4xl md:text-5xl font-serif italic mb-6 text-stone-900 dark:text-white">
							The Grand Plaza Finale
						</h3>
						<p className="text-stone-600 dark:text-stone-400 mb-10 leading-relaxed font-display text-lg">
							Set in the heart of the historic district, The Grand
							Plaza provided the majestic backdrop for our Season
							2 closing ceremony. With its soaring gold ceilings
							and marble runways, it was the perfect stage for the
							pinnacle of fashion.
						</p>

						{/* Stats Grid */}
						<div className="grid grid-cols-2 gap-y-10 gap-x-6 border-t border-stone-200 dark:border-stone-800 pt-10">
							<div className="flex flex-col gap-2">
								<span className="text-primary text-2xl font-bold flex items-center gap-2">
									<Users size={20} className="opacity-50" />{" "}
									1,200+
								</span>
								<span className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold">
									Guest Capacity
								</span>
							</div>

							<div className="flex flex-col gap-2">
								<span className="text-primary text-2xl font-bold flex items-center gap-2">
									<Calendar
										size={20}
										className="opacity-50"
									/>{" "}
									Sept 23
								</span>
								<span className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold">
									Event Date
								</span>
							</div>

							<div className="flex flex-col gap-2">
								<span className="text-primary text-2xl font-bold flex items-center gap-2">
									<MapPin size={20} className="opacity-50" />{" "}
									banglore, Karnataka
								</span>
								<span className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold">
									Location
								</span>
							</div>

							<div className="flex flex-col gap-2">
								<span className="text-primary text-2xl font-bold flex items-center gap-2">
									<Camera size={20} className="opacity-50" />{" "}
									65k+
								</span>
								<span className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold">
									Media Mentions
								</span>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
