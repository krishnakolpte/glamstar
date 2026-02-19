import Form from "@/components/ui/Form";
import RegisterHero from "@/components/ui/RegisterHero";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Register Now | Season 3 Casting - Shining Glam Star",
	description:
		"Your journey to the runway begins here. Apply for Shining Glam Star Season 3. Fill out the registration form to join India's most prestigious fashion legacy.",
	keywords: [
		"Apply for Shining Glam Star",
		"Model Registration 2026",
		"Fashion Show Auditions",
		"Become a Fashion Icon",
		"Season 3 Application Form",
	],
	openGraph: {
		title: "Join the Legacy: Season 3 Official Registration",
		description:
			"The spotlight is calling. Complete your application for Shining Glam Star Season 3 today.",
		url: "https://shiningglamstar.com/register",
		siteName: "Shining Glam Star",
		images: [
			{
				url: "/assets/gallery/g3.jpeg", // A high-quality image of the registration call
				width: 1200,
				height: 630,
				alt: "Shining Glam Star Season 3 Registration Open",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Start Your Fashion Journey | Season 3",
		description:
			"Fill the form and step onto the runway. Registration for Season 3 is live!",
		images: ["/assets/gallery/g3.jpeg"],
	},
};

export default function Register() {
	return (
		<>
			<RegisterHero />
			<Form />
		</>
	);
}
