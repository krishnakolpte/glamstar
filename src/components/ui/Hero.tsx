"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export default function SeasonTwoHero({
	title,
	bagroundImage,
}: {
	title: string;
	bagroundImage: StaticImageData;
}) {
	return (
		<header className="relative h-[100vh] w-full overflow-hidden flex items-end">
			{/* Background Image with Slow Zoom Effect */}
			<motion.div
				initial={{ scale: 1.1 }}
				animate={{ scale: 1 }}
				transition={{ duration: 10, ease: "linear" }}
				className="absolute inset-0"
			>
				<Image
					src={bagroundImage}
					alt="Season Two High Fashion"
					fill
					priority
					className="object-cover grayscale-[20%] brightness-75"
				/>
			</motion.div>

			{/* Premium Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/30 to-transparent" />

			<div className="relative max-w-7xl mx-auto px-6 pb-24 w-full">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6 block border-l-2 border-primary pl-4">
						Archive Collection
					</span>

					<h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] mb-8 tracking-tighter">
						{title}
						<br />
						<span className="italic font-serif font-light text-primary">
							HIGHLIGHTS
						</span>
					</h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
						className="text-stone-300 max-w-xl text-lg md:text-xl font-light leading-relaxed font-display"
					>
						Relive the prestige, the elegance, and the defining
						moments that shaped the fashion landscape of Season Two.
						A celebration of avant-garde design and unparalleled
						talent.
					</motion.p>
				</motion.div>
			</div>

			{/* Decorative Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
			>
				<div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
			</motion.div>
		</header>
	);
}
