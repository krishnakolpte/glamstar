"use client";

import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image"; // Added Image import
import { useRef } from "react";

interface GalleryItem {
	id: number;
	src: StaticImageData;
	title: string;
	category: string;
}

// Fixed: Explicitly typed as an array GalleryItem[]
const GallerySection = ({
	title,
	GALLERY_DATA,
}: {
	title: { t1: string; t2: string };
	GALLERY_DATA: GalleryItem[];
}) => {
	const containerRef = useRef<HTMLElement>(null);
	const isInView = useInView(containerRef, {
		once: true,
		margin: "-10% 0px",
	});

	return (
		<section
			ref={containerRef}
			id="gallery"
			className="py-20 md:py-32 bg-background-dark relative overflow-hidden"
		>
			<div className="max-w-[1400px] mx-auto px-6 relative z-10">
				{/* Header Section */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
					<div className="max-w-2xl">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							className="flex items-center gap-3 mb-6"
						>
							<span className="w-12 h-[1px] bg-primary"></span>
							<span className="font-display text-[10px] tracking-[0.4em] uppercase text-primary font-bold">
								Curator&apos;s Choice
							</span>
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2, duration: 0.8 }}
							className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.85] tracking-tighter uppercase"
						>
							{title.t1} <br />
							<span className="italic font-light text-primary pr-4">
								{title.t2}
							</span>
						</motion.h2>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ delay: 0.5 }}
						className="hidden lg:block text-right"
					>
						<p className="text-white/30 text-xs uppercase tracking-widest max-w-[200px]">
							A curated selection of the most iconic moments from
							our previous seasons.
						</p>
					</motion.div>
				</div>

				{/* Creative Masonry Grid */}
				<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
					{GALLERY_DATA.map((item, index) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{
								duration: 1,
								delay: (index % 3) * 0.15,
								ease: [0.215, 0.61, 0.355, 1],
							}}
							className="relative break-inside-avoid group cursor-none mb-8"
						>
							<div className="relative overflow-hidden rounded-sm bg-zinc-900 border border-white/[0.05]">
								<Image
									src={item.src}
									alt={item.title}
									placeholder="blur"
									className="w-full h-auto object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
								/>

								{/* Interactive Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
									<div className="overflow-hidden">
										<motion.p
											initial={{ y: 20 }}
											whileInView={{ y: 0 }}
											className="text-primary font-bold text-[9px] tracking-[0.3em] uppercase mb-2"
										>
											{item.category}
										</motion.p>
									</div>
									<div className="overflow-hidden">
										<motion.h3
											initial={{ y: 30 }}
											whileInView={{ y: 0 }}
											transition={{ delay: 0.1 }}
											className="text-white font-serif italic text-2xl tracking-tight"
										>
											{item.title}
										</motion.h3>
									</div>
									<div className="w-0 group-hover:w-full h-[1px] bg-primary/30 mt-4 transition-all duration-700 delay-200"></div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default GallerySection;
