import FoundersNote from "@/components/about/FoundersNote";
import AboutHero from "@/components/about/Hero";
import TimelineSection from "@/components/about/Timeline";

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
