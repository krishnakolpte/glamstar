"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero.jpeg";

export default function HeroSection() {
	return (
		<section
			id="home"
			className="relative min-h-screen w-full bg-background-dark overflow-hidden flex items-center pt-20"
		>
			{/* 1. Cinematic Background Layer */}
			<div className="absolute inset-0 z-0">
				<Image
					src={heroImage}
					alt="Shining Glamstar Runway"
					fill
					priority
					className="object-cover opacity-40 grayscale-[0.3] transition-transform duration-[10000ms] ease-out scale-105 hover:scale-100"
					sizes="100vw"
				/>
				{/* Overlays for Depth */}
				<div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_0%,var(--color-background-dark)_100%)] opacity-80" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
				{/* 2. Left Side: Editorial Typography */}
				<div className="flex flex-col items-start overflow-hidden">
					<div className="flex items-center gap-4 mb-6 animate-fade-in">
						<div className="w-12 h-[1px] bg-primary"></div>
						<span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
							The Premier Fashion Stage
						</span>
					</div>

					<h1 className="text-reveal font-serif text-7xl md:text-8xl lg:text-[9rem] font-bold leading-[0.85] text-white mb-8">
						The <br />
						<span className="italic text-primary">Future</span>{" "}
						<br />
						of Style
					</h1>

					<div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-4">
						<p className="text-white/60 max-w-sm text-sm md:text-base leading-relaxed font-display tracking-wide">
							Redefining elegance and modern aesthetics for the
							new generation of designers and icons. Season 3 is
							where legends are born.
						</p>

						{/* Secondary CTA */}
						<Link
							href="#gallery"
							className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-primary transition-colors"
						>
							View Gallery
							<ArrowRight
								size={16}
								className="group-hover:translate-x-2 transition-transform"
							/>
						</Link>
					</div>
				</div>

				{/* 3. Right Side: Premium Registration Banner */}
				<div className="relative flex justify-center lg:justify-end">
					<div className="relative w-full max-w-[400px] aspect-[4/5] glowing-border rounded-2xl overflow-hidden p-1.5 group">
						<div className="relative h-full w-full rounded-[1.25rem] overflow-hidden bg-surface-dark">
							<Image
								src={heroImage} // Use a specific model image if different
								alt="Season 3 Auditions"
								fill
								priority
								className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
							/>

							{/* Inner Content Card */}
							<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent flex flex-col justify-end p-8">
								<div className="flex items-center gap-2 mb-4">
									<Sparkles
										size={16}
										className="text-primary animate-pulse"
									/>
									<span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
										Limited Entries
									</span>
								</div>

								<h3 className="text-white text-3xl md:text-4xl font-serif font-bold mb-3">
									Season 3 <br />
									Registration
								</h3>

								<p className="text-white/70 text-xs mb-8 leading-relaxed max-w-[240px]">
									South India&apos;s largest fashion
									congregation. Join the elite.
								</p>

								<Link
									href="/season-3"
									className="w-full py-5 bg-primary text-background-dark font-black text-[11px] rounded-xl uppercase tracking-[0.2em] shadow-gold hover:bg-white transition-all flex items-center justify-center gap-3 group/btn"
								>
									Apply to Walk
									<ArrowRight
										size={18}
										className="group-hover/btn:translate-x-2 transition-transform"
									/>
								</Link>
							</div>
						</div>

						{/* Floating Decorative Label */}
						<div className="absolute -right-4 top-1/4 -rotate-90 bg-primary px-4 py-1.5 rounded-t-lg">
							<span className="text-[9px] font-black uppercase tracking-widest text-background-dark">
								Open Now
							</span>
						</div>
					</div>

					{/* Background Blur Accents */}
					<div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
					<div className="absolute -z-10 -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-[80px]" />
				</div>
			</div>

			{/* 4. Bottom Decorative Indicators */}
			<div className="absolute bottom-10 left-12 hidden xl:block">
				<div className="flex items-center gap-6">
					<p className="text-[10px] text-white/30 tracking-[0.8em] uppercase [writing-mode:vertical-lr] border-l border-white/10 pl-4 h-32">
						Glamour Evolution
					</p>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
				<span className="text-[9px] text-white/40 tracking-[0.3em] uppercase font-bold">
					Scroll
				</span>
				<div className="w-[1px] h-12 bg-gradient-to-b from-primary via-primary/50 to-transparent animate-bounce" />
			</div>
		</section>
	);
}
