"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import higlightImage from "@/assets/gallery/g3.jpeg";
import Link from "next/link";

export default function RegistrationHero() {
	const [timeLeft, setTimeLeft] = useState({
		days: 12,
		hrs: 8,
		min: 42,
		sec: 19,
	});

	// Simple countdown effect logic
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 };
				return { ...prev, sec: 59, min: prev.min - 1 };
			});
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const timeUnits = [
		{ label: "Days", value: timeLeft.days },
		{ label: "Hrs", value: timeLeft.hrs },
		{ label: "Min", value: timeLeft.min },
		{ label: "Sec", value: timeLeft.sec },
	];

	return (
		<header className="relative py-2.5 min-h-[90vh] flex items-center overflow-hidden bg-background-dark">
			{/* Background with Parallax and Gradients */}
			<div className="absolute inset-0 z-0">
				<motion.div
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{
						duration: 10,
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="relative w-full h-full"
				>
					<Image
						src={higlightImage}
						alt="Fashion Runway"
						fill
						className="object-cover opacity-30 grayscale brightness-50"
					/>
				</motion.div>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 text-center">
				{/* Animated Badge */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="inline-block border border-primary/40 bg-primary/10 px-6 py-2 rounded-full mb-10 backdrop-blur-sm"
				>
					<span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase">
						The Runway Awaits
					</span>
				</motion.div>

				{/* Title */}
				<motion.h1
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className="text-6xl md:text-[120px] font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase italic"
				>
					Season 3 <br />
					<span className="text-primary not-italic font-serif">
						Registration
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className="max-w-2xl mx-auto text-lg text-white/50 mb-16 font-light tracking-wide"
				>
					Elevate your career to international standards. The most
					prestigious fashion hunt of the year is back, seeking the
					next global icon.
				</motion.p>

				{/* Dynamic Countdown */}
				<div className="flex justify-center items-center gap-4 md:gap-10 mb-20">
					{timeUnits.map((unit, idx) => (
						<div
							key={unit.label}
							className="flex items-center gap-4 md:gap-10"
						>
							<div className="flex flex-col">
								<motion.span
									key={unit.value}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-5xl md:text-8xl font-black tabular-nums text-primary leading-none"
								>
									{unit.value < 10
										? `0${unit.value}`
										: unit.value}
								</motion.span>
								<span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mt-4">
									{unit.label}
								</span>
							</div>
							{idx !== timeUnits.length - 1 && (
								<span className="text-4xl md:text-6xl font-black text-white/10 mb-8">
									:
								</span>
							)}
						</div>
					))}
				</div>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="flex flex-col md:flex-row items-center justify-center gap-6"
				>
					<button className="group relative w-full md:w-auto px-12 py-5 bg-primary text-background-dark font-black rounded-sm overflow-hidden transition-all hover:pr-16">
						<Link
							href={"/register#register"}
							className="relative z-10 uppercase tracking-widest text-xs"
						>
							Start My Journey
						</Link>
						<div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
					</button>
				</motion.div>
			</div>
		</header>
	);
}
