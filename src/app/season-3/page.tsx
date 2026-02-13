import LargeCTA from "@/components/season-3/LargeCTA";
import RegistrationHero from "@/components/season-3/RegistrationHero";
import SelectionProcess from "@/components/season-3/SelectionProcess";
import WhatWeOffer from "@/components/season-3/WhatWeOffer";

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
