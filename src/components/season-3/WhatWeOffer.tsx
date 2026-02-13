"use client";

import { motion } from "framer-motion";
import {
	Video,
	Camera,
	Users,
	Award,
	GraduationCap,
	Banknote,
} from "lucide-react";

const offers = [
	{
		icon: <Video size={32} />,
		title: "National Media",
		desc: "Extensive coverage across major fashion networks and digital platforms reaching millions.",
	},
	{
		icon: <Camera size={32} />,
		title: "Portfolio Shoot",
		desc: "Professional portfolio creation with industry-leading photographers and stylists.",
	},
	{
		icon: <Users size={32} />,
		title: "Networking",
		desc: "Connect with international designers, brand managers, and top-tier modeling agencies.",
	},
	{
		icon: <Award size={32} />,
		title: "Endorsements",
		desc: "Direct opportunities for luxury brand ambassadorships and commercial contracts.",
	},
	{
		icon: <GraduationCap size={32} />,
		title: "Expert Training",
		desc: "Intensive bootcamps focusing on runway walking, etiquette, and personal branding.",
	},
	{
		icon: <Banknote size={32} />,
		title: "Cash Prizes",
		desc: "Grand winners receive substantial monetary rewards to kickstart their professional careers.",
	},
];

export default function WhatWeOffer() {
	return (
		<section className="py-32 bg-stone-50 dark:bg-stone-950 transition-colors duration-500">
			<div className="max-w-7xl mx-auto px-6">
				{/* Header Logic */}
				<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="max-w-xl"
					>
						<h2 className="text-5xl md:text-6xl font-black mb-6 uppercase leading-[0.9] tracking-tighter text-stone-900 dark:text-white">
							Why join <br />
							<span className="text-primary italic font-serif lowercase">
								Glamstar Season 3?
							</span>
						</h2>
						<div className="w-24 h-1.5 bg-primary" />
					</motion.div>

					<motion.p
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-stone-500 dark:text-stone-400 max-w-sm text-lg font-light leading-relaxed"
					>
						We provide the resources, the stage, and the spotlight.
						You provide the talent and the fire to shine.
					</motion.p>
				</div>

				{/* Offers Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{offers.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
							className="p-10 border border-stone-200 dark:border-stone-800 rounded-2xl hover:border-primary/50 transition-all duration-500 group bg-white dark:bg-stone-900/50 hover:shadow-2xl hover:shadow-primary/5"
						>
							<div className="text-primary/40 group-hover:text-primary transition-colors duration-500 mb-8 inline-block transform group-hover:scale-110 group-hover:-rotate-6 transition-transform">
								{item.icon}
							</div>

							<h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-stone-800 dark:text-stone-100">
								{item.title}
							</h3>

							<p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">
								{item.desc}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
