import LargeCTA from "@/components/season-3/LargeCTA";
import RegistrationHero from "@/components/season-3/RegistrationHero";
import SelectionProcess from "@/components/season-3/SelectionProcess";
import WhatWeOffer from "@/components/season-3/WhatWeOffer";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Season 3: The Immortal Legacy | Shining Glam Star",
	description:
		"The spotlight is waiting. Registration for Season 3 of Shining Glam Star is now open. Step into the legacy of high-fashion couture and editorial excellence.",
	keywords: [
		"Season 3 Registration",
		"Shining Glam Star Auditions",
		"Fashion Pageant 2026",
		"Next Top Model India",
		"Couture Runway Season 3",
	],
	openGraph: {
		title: "Step Into the Spotlight: Season 3 Announcement",
		description:
			"Are you the next face of the legacy? Register now for Season 3 and define the future of fashion.",
		url: "https://shiningglamstar.com/season-3",
		siteName: "Shining Glam Star",
		images: [
			{
				url: "/assets/gallery/g3.jpeg", // High-impact teaser image
				width: 1200,
				height: 630,
				alt: "Shining Glam Star Season 3 Gold & Dark Aesthetic Teaser",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Season 3 Is Here | Shining Glam Star",
		description:
			"Join the elite. Registration is live for the most awaited fashion event of the year.",
		images: ["/assets/gallery/g3.jpeg"],
	},
};

function page() {
	return (
		<>
			<RegistrationHero />
			<WhatWeOffer />
			<SelectionProcess />
			<LargeCTA />
		</>
	);
}

export default page;
