"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="py-20 bg-background-dark border-t border-primary/10 relative overflow-hidden">
			{/* Decorative Gradient Flare */}
			<div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
					{/* Brand Section */}
					<div className="md:col-span-2">
						<motion.span
							whileHover={{ x: 5 }}
							className="text-4xl font-black uppercase italic tracking-tighter mb-8 block text-white"
						>
							Shining{" "}
							<span className="text-primary">Glamstar</span>
						</motion.span>
						<p className="text-white/50 max-w-sm mb-10 leading-relaxed font-display text-sm">
							The definitive platform for Southern India&apos;s
							fashion talent. We celebrate the intersection of
							heritage craftsmanship and high-fashion innovation.
						</p>

						{/* Social Icons */}
						<div className="flex gap-4">
							{[
								{ Icon: Facebook, href: "#" },
								{ Icon: Instagram, href: "#" },
								{ Icon: Youtube, href: "#" },
							].map((social, i) => (
								<motion.a
									key={i}
									whileHover={{
										y: -5,
										backgroundColor: "var(--primary)",
										color: "#000",
									}}
									href={social.href}
									className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary transition-colors"
								>
									<social.Icon size={18} />
								</motion.a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h5 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">
							Explore
						</h5>
						<ul className="space-y-4 text-white/40 text-sm font-medium">
							{[
								"Our Story",
								"Season 1 Recap",
								"Season 2 Recap",
								"Press & Media",
							].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="hover:text-primary transition-colors duration-300"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h5 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">
							Contact
						</h5>
						<ul className="space-y-4 text-white/40 text-sm">
							<li className="hover:text-white transition-colors cursor-pointer">
								hello@shiningglamstar.com
							</li>
							<li className="hover:text-white transition-colors">
								+91 98765 43210
							</li>
							<li>Bangalore, KA, India</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-[10px] uppercase tracking-widest text-white/30">
						© 2026 Shining Glamstar. Crafted for Excellence.
					</p>

					<div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
						<a
							className="hover:text-primary transition-colors"
							href="#"
						>
							Privacy Policy
						</a>
						<a
							className="hover:text-primary transition-colors"
							href="#"
						>
							Terms of Service
						</a>
					</div>

					{/* Scroll to Top Button */}
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={scrollToTop}
						className="p-3 rounded-full bg-white/5 border border-white/10 text-primary hover:border-primary transition-all"
					>
						<ArrowUp size={16} />
					</motion.button>
				</div>
			</div>
		</footer>
	);
}
