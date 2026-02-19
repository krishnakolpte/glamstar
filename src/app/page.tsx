import PastSeasons from "@/components/home/AllSeasons";
import CTASection from "@/components/home/CTASection";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import Season3Announcement from "@/components/home/Season3Announcement";
import LargeCTA from "@/components/season-3/LargeCTA";

import { StaticImageData } from "next/image";

// Assets
import img1 from "@/assets/gallery/g1.jpeg";
import img2 from "@/assets/gallery/g2.jpeg";
import img3 from "@/assets/gallery/g3.jpeg";
import img4 from "@/assets/gallery/g4.jpeg";
import img5 from "@/assets/gallery/g5.jpeg";
import img6 from "@/assets/gallery/g6.jpeg";
import img7 from "@/assets/gallery/g7.jpeg";
import img8 from "@/assets/gallery/g8.jpeg";
import img9 from "@/assets/gallery/g9.jpeg";
import img10 from "@/assets/gallery/g10.jpeg";

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
];

export default function Home() {
	return (
		<>
			<HeroSection />
			<PastSeasons />
			<Season3Announcement />
			<GallerySection
				title={{ t1: "Visual", t2: "Poetry" }}
				GALLERY_DATA={GALLERY_DATA}
			/>
			<LargeCTA />
			<CTASection />
		</>
	);
}
