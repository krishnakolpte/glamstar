import GallerySection from "@/components/home/GallerySection";
import CelebritySpotlight from "@/components/season-2/CelebritySpotlight";
import SeasonTwoHero from "@/components/season-2/Hero";
import VenueSummary from "@/components/season-2/VenueSummary";
import WinnersSection from "@/components/season-2/WinnersSection";
import React from "react";

function page() {
	return (
		<>
			<SeasonTwoHero />
			<WinnersSection />
			<CelebritySpotlight />
			<VenueSummary />
			<GallerySection />
		</>
	);
}

export default page;
