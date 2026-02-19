import GallerySection from "@/components/home/GallerySection";
import CelebritySpotlight from "@/components/ui/CelebritySpotlight";
import SeasonTwoHero from "@/components/ui/Hero";
import VenueSummary from "@/components/ui/VenueSummary";
import WinnersSection from "@/components/ui/WinnersSection";
import bagroundImage from "@/assets/gallery/g3.jpeg";
import winner1 from "@/assets/s1winner.jpeg";
import guestImage from "@/assets/guest1.jpg";

import { StaticImageData } from "next/image";

import img1 from "@/assets/s1/1.jpeg";
import img2 from "@/assets/s1/2.jpeg";
import img3 from "@/assets/s1/3.jpeg";
import img4 from "@/assets/s1/4.jpeg";
import img5 from "@/assets/s1/5.jpeg";
import img6 from "@/assets/s1/6.jpeg";
import img7 from "@/assets/s1/7.jpeg";
import img8 from "@/assets/s1/8.jpeg";
import img9 from "@/assets/s1/9.jpeg";

import imageVenue from "@/assets/s1/3.jpeg";

interface GalleryItem {
	id: number;
	src: StaticImageData;
	title: string;
	category: string;
}

const GALLERY_DATA: GalleryItem[] = [
	{ id: 1, src: img1, title: "Avant-Garde Structure", category: "Couture" },
	{ id: 2, src: img2, title: "Silk Movement", category: "Editorial" },
	{ id: 3, src: img3, title: "Modern Silhouette", category: "Runway" },
	{ id: 4, src: img4, title: "The Golden Hour", category: "Couture" },
	{ id: 5, src: img5, title: "Ethereal Textures", category: "Editorial" },
	{ id: 6, src: img6, title: "Midnight Couture", category: "Runway" },
	{ id: 7, src: img7, title: "Stellar Grace", category: "Couture" },
	{ id: 8, src: img8, title: "Urban Nomad", category: "Editorial" },
	{ id: 9, src: img9, title: "Luxe Heritage", category: "Runway" },
];

const WINNERS = [
	{
		name: "Elena Vance",
		title: "Grand Champion",
		quote: "Redefining modern luxury through sustainable textiles and heritage craftsmanship.",
		icon: "trophy", // Pass as string
		image: winner1,
		delay: 0.1,
	},
	{
		name: "Marcus Thorne",
		title: "Best Evening Wear",
		quote: "A masterclass in silhouette and structural fluidity that captivated the jury.",
		icon: "award", // Pass as string
		image: winner1,
		delay: 0.3,
	},
	{
		name: "Julianne Heist",
		title: "Emerging Talent",
		quote: "Bold experimentation with digital prints and neon-infused classical wear.",
		icon: "star", // Pass as string
		image: winner1,
		delay: 0.5,
	},
];

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Season 1: The Genesis | Shining Glam Star",
	description:
		"Relive the beginning of the legacy. Explore the iconic runway moments, avant-garde debuts, and the rising stars that defined the first chapter of Shining Glam Star.",
	keywords: [
		"Shining Glam Star Season 1",
		"Fashion Genesis",
		"Inaugural Season",
		"Runway Origins",
		"First Fashion Icons",
	],
	openGraph: {
		title: "Season 1: Where the Legacy Began",
		description:
			"Witness the inaugural moments of grace and grit. From the first walk to the first win.",
		url: "https://shiningglamstar.com/season-1",
		siteName: "Shining Glam Star",
		images: [
			{
				url: "/assets/s1/3.jpeg", // Path to your hero image from Season 1
				width: 1200,
				height: 630,
				alt: "The very first runway of Shining Glam Star",
			},
		],
		type: "article",
	},
	twitter: {
		card: "summary_large_image",
		title: "Shining Glam Star Season 1 Archive",
		description:
			"The archive of the first fashion revolution. See the highlights.",
		images: ["/assets/s1/2.jpeg"],
	},
};

export default function Page() {
	// Capitalized Page
	return (
		<>
			<SeasonTwoHero title="SEASON #1" bagroundImage={bagroundImage} />
			<WinnersSection season={1} WINNERS={WINNERS} />
			<CelebritySpotlight
				season={1}
				guest="Lovely star Prem"
				guestImage={guestImage}
			/>
			<VenueSummary imageVenue={imageVenue} />
			<GallerySection
				title={{ t1: "Visual", t2: "Poetry" }}
				GALLERY_DATA={GALLERY_DATA}
			/>
		</>
	);
}
