"use client";

import { motion } from "framer-motion";
import { Edit3, CreditCard, Camera, Sparkles } from "lucide-react";

const steps = [
	{
		icon: <Edit3 size={24} />,
		title: "Register",
		desc: "Complete the online form with your basic details and headshots.",
		active: true,
	},
	{
		icon: <CreditCard size={24} />,
		title: "Payment",
		desc: "Secure your slot with the nominal registration fee.",
		active: false,
	},
	{
		icon: <Camera size={24} />,
		title: "Audition",
		desc: "Live screening rounds in 8 major cities nationwide.",
		active: false,
	},
	{
		icon: <Sparkles size={24} />,
		title: "The Stage",
		desc: "The grand finale in front of a global audience and judges.",
		active: false,
	},
];

export default function SelectionProcess() {
	return (
		<section className="py-32 bg-stone-100 dark:bg-stone-900/30 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-24">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="text-4xl font-black uppercase mb-4 tracking-tighter text-stone-900 dark:text-white"
					>
						Selection Process
					</motion.h2>
					<p className="text-stone-500 max-w-md mx-auto text-lg font-light">
						Your journey from digital entry to the grand spotlight
						is mapped out in four clear stages.
					</p>
				</div>

				{/* Stepper Container */}
				<div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 max-w-6xl mx-auto">
					{/* Background Connecting Line (Desktop) */}
					<div className="absolute top-8 left-0 w-full h-[2px] bg-stone-200 dark:bg-stone-800 hidden md:block" />

					{/* Animated Progress Line (Desktop) */}
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: "25%" }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.5 }}
						className="absolute top-8 left-0 h-[2px] bg-primary hidden md:block z-0"
					/>

					{steps.map((step, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.2 }}
							className="relative z-10 flex-1 flex flex-col items-center text-center group w-full"
						>
							{/* Icon Circle */}
							<div
								className={`
                w-16 h-16 rounded-full flex items-center justify-center mb-8 
                transition-all duration-500 ring-8 ring-stone-100 dark:ring-stone-900
                ${
					step.active
						? "bg-primary text-white shadow-xl shadow-primary/30"
						: "bg-white dark:bg-stone-800 text-stone-400 border border-stone-200 dark:border-stone-700 group-hover:border-primary/50"
				}
              `}
							>
								{step.icon}
							</div>

							{/* Text Content */}
							<h4
								className={`
                font-bold text-xs uppercase tracking-[0.2em] mb-3 transition-colors
                ${step.active ? "text-primary" : "text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100"}
              `}
							>
								{step.title}
							</h4>

							<p className="text-xs text-stone-500 dark:text-stone-400 px-6 leading-relaxed max-w-[200px]">
								{step.desc}
							</p>

							{/* Step Number Label (Optional Decorative) */}
							<span className="absolute -top-4 text-[40px] font-black opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
								0{idx + 1}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
