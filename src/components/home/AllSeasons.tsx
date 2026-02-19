"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import season1Image from "@/assets/s1winner.jpeg";
import season2Image from "@/assets/season2.jpeg";

const seasons = [
	{
		id: "01",
		title: "The Inception",
		location: "Bangalore",
		stats: "24 Designers | 120 Models",
		image: season1Image, // Replace with actual path
		tag: "Season 01",
	},
	{
		id: "02",
		title: "Urban Ethereal",
		location: "Chennai",
		stats: "32 Designers | 200 Models",
		image: season2Image, // Replace with actual path
		tag: "Season 02",
	},
];

export default function PastSeasons() {
	return (
		<section
			className="py-32 bg-background-dark relative overflow-hidden"
			id="past-seasons"
		>
			{/* Background Decorative Text */}
			<div className="absolute top-10 right-[-5%] text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase italic">
				Legacy
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Header Section */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
					<div className="max-w-xl">
						<div className="flex items-center gap-3 mb-4">
							<div className="h-[2px] w-8 bg-primary"></div>
							<span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
								Archive
							</span>
						</div>
						<h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
							Legacy in <span className="italic">Motion</span>
						</h2>
						<p className="text-white/50 text-lg leading-relaxed font-display">
							Our journey through the seasons has defined new
							standards in the fashion industry, sculpting the
							icons of tomorrow.
						</p>
					</div>

					<div className="flex items-center gap-6 group">
						<div className="flex flex-col items-end">
							<span className="text-primary font-black text-6xl md:text-7xl leading-none tracking-tighter">
								01<span className="text-white/20">—</span>02
							</span>
							<span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mt-2">
								Past Chapters
							</span>
						</div>
					</div>
				</div>

				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
					{seasons.map((season, idx) => (
						<Link href={`/season-${idx + 1}`} key={season.id}>
							<div className="group cursor-pointer">
								<div className="relative aspect-[16/10] md:aspect-video rounded-2xl overflow-hidden mb-8 glowing-border p-[1px]">
									<div className="relative w-full h-full overflow-hidden rounded-[1.1rem]">
										<Image
											src={season.image}
											alt={season.title}
											fill
											className="w-full h-full object-cover   group-hover:scale-110 transition-all duration-[1.5s] ease-out"
										/>

										{/* Glassmorphism Badge */}
										<div className="absolute top-6 left-6 px-4 py-2 bg-background-dark/60 backdrop-blur-md border border-white/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
											{season.tag}
										</div>

										{/* Hover Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
									</div>
								</div>

								<div className="flex justify-between items-start group-hover:translate-x-2 transition-transform duration-500">
									<div>
										<h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-display tracking-tight">
											{season.title}
										</h4>
										<div className="flex items-center gap-3">
											<p className="text-white/40 text-xs font-bold uppercase tracking-widest">
												{season.location}
											</p>
											<div className="w-1 h-1 rounded-full bg-primary/40"></div>
											<p className="text-white/40 text-xs font-bold uppercase tracking-widest">
												{season.stats}
											</p>
										</div>
									</div>

									<div className="p-3 rounded-full border border-white/10 text-white group-hover:bg-primary group-hover:text-background-dark group-hover:border-primary transition-all duration-500 -rotate-45 group-hover:rotate-0">
										<ArrowUpRight size={20} />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
