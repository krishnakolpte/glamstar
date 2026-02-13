import GallerySection from "@/components/home/GallerySection";
import CelebritySpotlight from "@/components/ui/CelebritySpotlight";
import SeasonTwoHero from "@/components/ui/Hero";
import VenueSummary from "@/components/ui/VenueSummary";
import WinnersSection from "@/components/ui/WinnersSection";
import bagroundImage from "@/assets/season2.jpeg";
import guestImage from "@/assets/guest2.avif";

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
			<VenueSummary />
			<GallerySection />
		</>
	);
}
