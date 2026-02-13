import GallerySection from "@/components/home/GallerySection";
import CelebritySpotlight from "@/components/ui/CelebritySpotlight";
import SeasonTwoHero from "@/components/ui/Hero";
import VenueSummary from "@/components/ui/VenueSummary";
import WinnersSection from "@/components/ui/WinnersSection";
import bagroundImage from "@/assets/gallery/g3.jpeg";
import winner1 from "@/assets/s1winner.jpeg";
import guestImage from "@/assets/guest1.jpg";

// Note: We don't need the Lucide imports here anymore
// because we are passing strings.

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
			<VenueSummary />
			<GallerySection />
		</>
	);
}
