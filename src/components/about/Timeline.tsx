"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import imageOne from "@/assets/hero.jpeg";
import imageTwo from "@/assets/gallery/g3.jpeg";
import imageThree from "@/assets/gallery/g9.jpeg";

const MILESTONES = [
	{
		year: "2015",
		title: "The First Spark",
		desc: "What started as a small exhibition redefined the 'glamstar' aesthetic. We launched with light-reactive textiles that transformed under stage spotlights.",
		image: imageOne,
	},
	{
		year: "2019",
		title: "The Global Stage",
		desc: "Our debut at Paris Fashion Week solidified our place. The 'Solaris' collection won 'Most Innovative Show' of the season among international critics.",
		image: imageTwo,
	},
	{
		year: "2023",
		title: "Digital Renaissance",
		desc: "Embracing sustainable tech, our latest collection uses recycled ocean plastics woven into luminescent fibers. A testament to beauty that honors the earth.",
		image: imageThree,
	},
];

export default function TimelineSection() {
	const containerRef = useRef<HTMLDivElement>(null);

	// Line drawing animation logic
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 80%", "end 20%"],
	});

	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<section
			ref={containerRef}
			className="py-32 bg-background-dark overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-6 relative">
				{/* Central Animated Line */}
				<motion.div
					style={{ scaleY, originY: 0 }}
					className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-primary/40 hidden md:block z-0"
				/>

				<div className="space-y-40">
					{MILESTONES.map((item, index) => {
						const isEven = index % 2 === 1;
						return (
							<div
								key={item.year}
								className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10 ${isEven ? "md:flex-row-reverse" : ""}`}
							>
								{/* Text Content */}
								<motion.div
									initial={{
										opacity: 0,
										x: isEven ? 50 : -50,
									}}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{
										duration: 0.8,
										ease: "easeOut",
									}}
									className={`w-full md:w-1/2 ${isEven ? "text-left" : "text-right"}`}
								>
									<span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-4 block">
										{item.year}
									</span>
									<h3 className="text-4xl lg:text-5xl font-serif italic text-white mb-6">
										{item.title}
									</h3>
									<p
										className={`text-white/40 leading-relaxed max-w-md ${isEven ? "mr-auto" : "ml-auto"}`}
									>
										{item.desc}
									</p>
								</motion.div>

								{/* Center Dot */}
								<div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] hidden md:block" />

								{/* Image Content */}
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.9,
										rotate: isEven ? -2 : 2,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										rotate: 0,
									}}
									viewport={{ once: true }}
									transition={{ duration: 1 }}
									className="w-full md:w-1/2"
								>
									<div className="aspect-[4/5] relative rounded-sm overflow-hidden border border-white/5 group">
										<Image
											src={item.image}
											alt={item.title}
											fill
											className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
										/>
										<div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
									</div>
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
