"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const closeMenu = () => setOpen(false);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Season 1", href: "/season-1" },
		{ name: "Season 2", href: "/season-2" },
	];

	return (
		<>
			<nav
				className={`fixed top-0 w-full z-50 transition-all duration-700 ${
					scrolled
						? "bg-background-dark/95 backdrop-blur-xl py-3 border-b border-primary/30 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
						: "bg-transparent py-6"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
					{/* LEFT - LOGO */}
					<Link href="/" className="flex items-center gap-3 group">
						<div className="relative w-11 h-11 overflow-hidden rounded-full border-2 border-primary/40 bg-background-dark shadow-gold/20 shadow-lg">
							<Image
								src="/vercel.svg"
								alt="Shining Glamstar Logo"
								fill
								className="object-contain p-2 group-hover:rotate-12 transition-transform duration-500"
							/>
						</div>
						<div className="flex flex-col leading-none">
							<span
								className={`text-xl md:text-2xl font-black tracking-tighter uppercase italic font-display transition-colors duration-500 ${scrolled ? "text-white" : "text-background-dark dark:text-white"}`}
							>
								Shining
								<span className="text-primary group-hover:text-primary-light transition-colors">
									Glamstar
								</span>
							</span>
							<span className="text-[7px] tracking-[0.5em] uppercase font-black text-primary/80">
								The Elite Pageant
							</span>
						</div>
					</Link>

					{/* DESKTOP MENU */}
					<div className="hidden md:flex items-center gap-10">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className={`relative text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-500 font-display group py-2 ${
									scrolled
										? "text-white/80 hover:text-primary"
										: "text-background-dark/80 dark:text-white/80 hover:text-primary"
								}`}
							>
								{link.name}
								<span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-500 group-hover:w-full"></span>
							</Link>
						))}

						{/* CREATIVE SEASON 3 LINK */}
						<Link
							href="/season-3"
							className="group relative flex items-center gap-3 text-[10px] font-black tracking-[0.25em] uppercase text-primary font-display border border-primary/20 px-4 py-2 rounded-full hover:bg-primary/5 transition-all"
						>
							<span className="group-hover:tracking-[0.35em] transition-all">
								Season 3
							</span>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_10px_#e0b629]"></span>
							</span>
							{/* Animated Tooltip */}
							<span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-500 bg-primary text-background-dark text-[9px] px-3 py-1 rounded-sm font-black shadow-2xl whitespace-nowrap">
								REGISTERING NOW
							</span>
						</Link>

						{/* CTA BUTTON */}
						<Link
							href="/season-3"
							className="glowing-border px-8 py-3.5 bg-primary text-background-dark text-[10px] font-black uppercase tracking-[0.25em] rounded-full hover:scale-105 hover:bg-white transition-all active:scale-95 font-display flex items-center gap-2 group shadow-xl"
						>
							Apply Now
							<ArrowRight
								size={14}
								className="group-hover:translate-x-2 transition-transform duration-500"
							/>
						</Link>
					</div>

					{/* MOBILE MENU BUTTON */}
					<button
						className="md:hidden text-primary p-2 bg-primary/10 rounded-xl"
						onClick={() => setOpen(true)}
					>
						<Menu size={28} strokeWidth={3} />
					</button>
				</div>
			</nav>

			{/* MOBILE SIDEBAR OVERLAY */}
			<div
				className={`fixed inset-0 bg-background-dark/95 backdrop-blur-md z-[60] transition-opacity duration-700 md:hidden ${
					open
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				onClick={closeMenu}
			/>

			{/* MOBILE SIDEBAR */}
			<div
				className={`fixed top-0 right-0 h-full w-full max-w-[320px] bg-background-dark text-white shadow-[0_0_60px_rgba(0,0,0,0.5)] z-[70] p-10 transform transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) md:hidden border-l border-primary/10 ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex justify-between items-center mb-20">
					<span className="text-2xl font-black uppercase italic font-display tracking-tighter text-white">
						SG<span className="text-primary">.</span>
					</span>
					<button
						className="text-primary p-3 border-2 border-primary/20 rounded-full hover:rotate-90 transition-transform duration-500"
						onClick={closeMenu}
					>
						<X size={24} />
					</button>
				</div>

				<div className="flex flex-col gap-10">
					{navLinks.map((link, idx) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={closeMenu}
							style={{ transitionDelay: `${idx * 100}ms` }}
							className={`text-2xl font-black tracking-widest uppercase hover:text-primary transition-all font-display ${open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
						>
							{link.name}
						</Link>
					))}

					<Link
						href="/season-3"
						onClick={closeMenu}
						className={`group border-t border-white/10 pt-10 flex flex-col gap-3 transition-all duration-700 delay-300 ${open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
					>
						<div className="flex items-center gap-4">
							<span className="text-2xl font-black tracking-widest uppercase text-primary font-display">
								Season 3
							</span>
							<span className="bg-primary text-background-dark text-[9px] px-3 py-1 rounded-full font-black animate-bounce">
								HOT
							</span>
						</div>
						<p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">
							Auditions Starting Soon
						</p>
					</Link>

					<Link
						href="/season-3"
						onClick={closeMenu}
						className="mt-6 px-6 py-5 bg-primary text-center text-background-dark text-sm font-black uppercase tracking-[0.2em] rounded-xl shadow-gold transition-all font-display flex items-center justify-center gap-3 active:scale-95"
					>
						Register Now
						<ArrowRight size={20} />
					</Link>
				</div>
			</div>
		</>
	);
}
