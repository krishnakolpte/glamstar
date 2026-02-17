import PastSeasons from "@/components/home/AllSeasons";
import CTASection from "@/components/home/CTASection";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import Season3Announcement from "@/components/home/Season3Announcement";
import LargeCTA from "@/components/season-3/LargeCTA";

export default function Home() {
	return (
		<>
			<HeroSection />
			<PastSeasons />
			<Season3Announcement />
			<GallerySection />
			<LargeCTA />
			<CTASection />
		</>
	);
}
