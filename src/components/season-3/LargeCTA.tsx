"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import higlightImage from "@/assets/gallery/g10.jpeg";
import Link from "next/link";

export default function LargeCTA() {
	return (
		<section className="py-24 px-6 bg-white dark:bg-stone-950 transition-colors">
			<div className="max-w-7xl mx-auto relative group overflow-hidden rounded-3xl bg-stone-900 shadow-2xl">
				{/* Background Image Container */}
				<div className="absolute inset-0 z-0">
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 1.2, ease: "easeOut" }}
						className="relative w-full h-full"
					>
						<Image
							src={higlightImage}
							alt="Editorial Model Pose"
							fill
							className="object-cover"
						/>
					</motion.div>
					{/* Gradient Overlay for Text Readability */}
					<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
				</div>

				{/* Content Content */}
				<div className="relative z-10 p-12 md:p-24 max-w-2xl">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase"
					>
						BE THE <br />
						<span className="text-primary italic font-serif lowercase">
							next big face.
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-lg md:text-xl text-stone-300 mb-12 leading-relaxed font-light"
					>
						Don&apos;t let your dream wait another year. Season 3 is
						the biggest platform for aspiring models to turn their
						passion into a professional career.
					</motion.p>

					<div className="flex flex-col sm:flex-row gap-6">
						<Link href={"/register#register"}>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="px-12 py-5 cursor-pointer bg-primary text-background-dark text-lg font-black rounded-sm shadow-xl shadow-primary/20 transition-all uppercase tracking-widest hover:bg-white"
							>
								Apply Now for Season 3
							</motion.button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
