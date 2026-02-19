import GallerySection from "@/components/home/GallerySection";
import CelebritySpotlight from "@/components/ui/CelebritySpotlight";
import SeasonTwoHero from "@/components/ui/Hero";
import VenueSummary from "@/components/ui/VenueSummary";
import WinnersSection from "@/components/ui/WinnersSection";
import bagroundImage from "@/assets/season2.jpeg";
import guestImage from "@/assets/guest2.avif";

import { StaticImageData } from "next/image";

// Assets
import img1 from "@/assets/s2/1.jpeg";
import img2 from "@/assets/s2/2.jpeg";
import img3 from "@/assets/s2/3.jpeg";
import img4 from "@/assets/s2/3.jpeg";
import img5 from "@/assets/s2/4.jpeg";
import img6 from "@/assets/s2/5.jpeg";
import img7 from "@/assets/s2/6.jpeg";
import img8 from "@/assets/s2/7.jpeg";
import img9 from "@/assets/s2/8.jpeg";
import img10 from "@/assets/s2/9.jpeg";
import img11 from "@/assets/s2/10.jpeg";
import img12 from "@/assets/s2/12.jpeg";
import img13 from "@/assets/s2/13.jpeg";

import imageVenue from "@/assets/s2/3.jpeg";

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
	{ id: 10, src: img10, title: "Velvet Night", category: "Couture" },
	{ id: 11, src: img11, title: "Urban Nomad", category: "Editorial" },
	{ id: 12, src: img12, title: "Luxe Heritage", category: "Runway" },
	{ id: 13, src: img13, title: "Velvet Night", category: "Couture" },
];

const WINNERS = [
	{
		name: "Elena Vance",
		title: "Grand Champion",
		quote: "Redefining modern luxury through sustainable textiles and heritage craftsmanship.",
		icon: "trophy", // Plain string
		image: bagroundImage,
		delay: 0.1,
	},
	{
		name: "Marcus Thorne",
		title: "Best Evening Wear",
		quote: "A masterclass in silhouette and structural fluidity that captivated the jury.",
		icon: "award", // Plain string
		image: bagroundImage,
		delay: 0.3,
	},
	{
		name: "Julianne Heist",
		title: "Emerging Talent",
		quote: "Bold experimentation with digital prints and neon-infused classical wear.",
		icon: "star", // Plain string
		image: bagroundImage,
		delay: 0.5,
	},
];

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Season 2: The Evolution | Shining Glam Star",
	description:
		"Beyond the basics. Season 2 of Shining Glam Star redefined elegance with bolder silhouettes and breathtaking performances. Explore the archive of our sophomore journey.",
	keywords: [
		"Shining Glam Star Season 2",
		"Fashion Evolution",
		"Sophomore Season Highlights",
		"Bold Runway Trends",
		"Elite Modeling India",
	],
	openGraph: {
		title: "Season 2: A New Dimension of Glamour",
		description:
			"Witness the growth. Season 2 brought more grit, more grace, and a global fashion perspective.",
		url: "https://shiningglamstar.com/season-2",
		siteName: "Shining Glam Star",
		images: [
			{
				url: "/assets/s2/3.jpeg", // Path to your Season 2 hero image
				width: 1200,
				height: 630,
				alt: "High-fashion editorial from Season 2",
			},
		],
		type: "article",
	},
	twitter: {
		card: "summary_large_image",
		title: "Shining Glam Star Season 2: The Evolution",
		description:
			"Where bold creativity took center stage. Revisit the Season 2 highlights.",
		images: ["/assets/s2/3.jpeg"],
	},
};

// Renamed to 'Page' (Upper case) as per React standards
export default function Page() {
	return (
		<>
			<SeasonTwoHero title="SEASON #2" bagroundImage={bagroundImage} />
			<WinnersSection season={2} WINNERS={WINNERS} />
			<CelebritySpotlight
				season={2}
				guest="SHARAN"
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
