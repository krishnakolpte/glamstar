import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Editorial Serif for Headings (Premium Fashion Look)
const playfair = Playfair_Display({
	variable: "--font-serif",
	subsets: ["latin"],
	display: "swap",
});

// Modern Sans for UI and Body (Google-style clarity)
const inter = Inter({
	variable: "--font-display",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NODE_ENV === "production"
			? "https://your-production-domain.com"
			: "http://localhost:3000",
	),
	title: {
		default: "Shining Glamstar | South India's Premier Fashion Show",
		template: "%s | Shining Glamstar",
	},
	description:
		"Shining Glamstar Season 3: South India Level. Join the elite fashion platform that transformed talent from Tumkur District to State Level. Register now for the biggest runway experience.",
	keywords: [
		"Fashion Show South India",
		"Shining Glamstar Season 3",
		"Modeling Auditions Karnataka",
		"Fashion Events 2026",
		"Professional Modeling Platform",
	],
	openGraph: {
		title: "Shining Glamstar | Official Website",
		description:
			"From District to South India Level – Register for Season 3 of Shining Glamstar.",
		type: "website",
		locale: "en_IN",
		images: [
			{
				url: "/og-image.jpg", // Ensure you add this to your public folder
				width: 1200,
				height: 630,
				alt: "Shining Glamstar Fashion Show",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Shining Glamstar Season 3",
		description: "Register for the South India Level Fashion Show.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`
                    ${playfair.variable} 
                    ${inter.variable} 
                    bg-background-light 
                    text-slate-900 
                    antialiased 
                    selection:bg-primary/30
                `}
			>
				{/* Note: Using dark mode class logic? 
                  Ensure your Navbar or a ThemeProvider handles 'dark' class on <html> 
                */}
				<Navbar />
				<main className="min-h-screen overflow-x-hidden relative bg-background-dark">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
