import FoundersNote from "@/components/about/FoundersNote";
import AboutHero from "@/components/about/Hero";
import TimelineSection from "@/components/about/Timeline";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us | The Legacy of Shining Glam Star",
	description:
		"Discover the journey of Shining Glam Star. From runway elegance to avant-garde couture, learn about our mission to spotlight the next generation of fashion icons.",
	keywords: [
		"Fashion Legacy",
		"Shining Glam Star History",
		"Model Sanctuary",
		"Couture Evolution",
		"Season 3 Fashion",
	],
	openGraph: {
		title: "The Vision Behind Shining Glam Star",
		description:
			"Where style meets soul. Explore the story of India's most iconic fashion platform.",
		url: "https://shiningglamstar.com/about",
		siteName: "Shining Glam Star",
		images: [
			{
				url: "/assets/hero.jpeg", // Ensure this image exists in your public folder
				width: 1200,
				height: 630,
				alt: "Models on the Shining Glam Star runway",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "About Shining Glam Star",
		description: "Join the journey of elegance and editorial excellence.",
		images: ["/assets/s1winner.jpeg"],
	},
};

function page() {
	return (
		<>
			<AboutHero />
			<TimelineSection />
			<FoundersNote />
		</>
	);
}

export default page;
