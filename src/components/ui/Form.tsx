"use client";

import { useState } from "react";
import { MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Form() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		altPhone: "",
		age: "",
		address: "",
		message: "",
	});

	const BUSINESS_PHONE = "919606138055"; // Replace with your actual number

	const handleWhatsAppRedirect = (e: React.FormEvent) => {
		e.preventDefault();

		const text =
			`*New Participant Registration*%0A` +
			`--------------------------%0A` +
			`*Name:* ${formData.name}%0A` +
			`*Age:* ${formData.age}%0A` +
			`*Email:* ${formData.email}%0A` +
			`*Phone:* ${formData.phone}%0A` +
			`*Alt Phone:* ${formData.altPhone}%0A` +
			`*Address:* ${formData.address}%0A` +
			`*Inquiry:* ${formData.message}%0A%0A` +
			`_Please share payment details for confirmation._`;

		window.open(`https://wa.me/${BUSINESS_PHONE}?text=${text}`, "_blank");
	};

	return (
		<div className=" min-h-screen bg-background-dark text-white selection:bg-primary selection:text-black">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
					{/* Left Side: Editorial Info */}
					<div className="lg:col-span-5 space-y-8 md:space-y-12 lg:sticky lg:top-24">
						<header className="space-y-4 md:space-y-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic leading-[1.1]">
									Join the <br />
									<span className="not-italic text-primary drop-shadow-sm">
										Legacy
									</span>
								</h1>
								<div className="w-12 md:w-20 h-1 bg-primary mt-4 md:mt-6"></div>
							</motion.div>

							<p className="text-white/60 max-w-md text-base md:text-lg leading-relaxed font-light">
								Begin your journey into the spotlight. Fill in
								your details, and our concierge will guide you
								through the final verification on WhatsApp.
							</p>
						</header>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8 pt-4">
							<div className="flex items-center space-x-4 md:space-x-6 group">
								<div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
									<MapPin className="w-5 h-5 md:w-6 md:h-6" />
								</div>
								<div>
									<h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50">
										Venue
									</h3>
									<p className="text-sm md:text-base font-medium">
										Fashion District, Milan
									</p>
								</div>
							</div>

							<div className="flex items-center space-x-4 md:space-x-6 group">
								<div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
									<Mail className="w-5 h-5 md:w-6 md:h-6" />
								</div>
								<div>
									<h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50">
										Support
									</h3>
									<p className="text-sm md:text-base font-medium break-all">
										concierge@shiningglamstar.com
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side: Responsive Form */}
					<div id="register" className="lg:col-span-7 w-full">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							className="bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl"
						>
							<form
								onSubmit={handleWhatsAppRedirect}
								className="space-y-6 md:space-y-8"
							>
								{/* Name & Age */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
									<div className="form-group">
										<label className="register-label">
											Full Name
										</label>
										<input
											required
											placeholder="e.g. Alexander McQueen"
											className="register-input"
											onChange={(e) =>
												setFormData({
													...formData,
													name: e.target.value,
												})
											}
										/>
									</div>
									<div className="form-group">
										<label className="register-label">
											Age
										</label>
										<input
											required
											type="number"
											placeholder="21"
											className="register-input"
											onChange={(e) =>
												setFormData({
													...formData,
													age: e.target.value,
												})
											}
										/>
									</div>
								</div>

								{/* Contacts */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
									<div className="form-group">
										<label className="register-label">
											Contact Number
										</label>
										<input
											required
											type="tel"
											placeholder="+91"
											className="register-input"
											onChange={(e) =>
												setFormData({
													...formData,
													phone: e.target.value,
												})
											}
										/>
									</div>
									<div className="form-group">
										<label className="register-label">
											Alternate Number
										</label>
										<input
											type="tel"
											placeholder="Optional"
											className="register-input"
											onChange={(e) =>
												setFormData({
													...formData,
													altPhone: e.target.value,
												})
											}
										/>
									</div>
								</div>

								{/* Email */}
								<div className="form-group">
									<label className="register-label">
										Email Address
									</label>
									<input
										required
										type="email"
										placeholder="your@email.com"
										className="register-input"
										onChange={(e) =>
											setFormData({
												...formData,
												email: e.target.value,
											})
										}
									/>
								</div>

								{/* Address */}
								<div className="form-group">
									<label className="register-label">
										Full Address
									</label>
									<textarea
										required
										placeholder="Apartment, Street, City"
										rows={2}
										className="register-input resize-none"
										onChange={(e) =>
											setFormData({
												...formData,
												address: e.target.value,
											})
										}
									/>
								</div>

								{/* Notes */}
								<div className="form-group">
									<label className="register-label">
										About your style
									</label>
									<textarea
										placeholder="Any additional details..."
										rows={3}
										className="register-input resize-none"
										onChange={(e) =>
											setFormData({
												...formData,
												message: e.target.value,
											})
										}
									/>
								</div>

								{/* Submit Button */}
								<div className="pt-4">
									<button
										type="submit"
										className="group relative w-full bg-primary text-black font-black py-4 md:py-6 rounded-lg uppercase tracking-[0.25em] text-[10px] md:text-xs overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] active:scale-[0.98]"
									>
										<span className="relative z-10">
											Share Details & Pay via WhatsApp
										</span>
										<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
									</button>
									<p className="text-center text-[10px] text-white/30 mt-4 uppercase tracking-widest font-medium">
										Secure Direct Encryption via WhatsApp
									</p>
								</div>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;
