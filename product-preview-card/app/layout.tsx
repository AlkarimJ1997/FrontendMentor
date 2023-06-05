import "./globals.css";
import { Montserrat, Fraunces } from "next/font/google";

const montserrat = Montserrat({
	weight: ["500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

const fraunces = Fraunces({
	weight: ["700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-fraunces",
});

export const metadata = {
	title: "Product Preview Card",
	description: "A product preview card built with Tailwind for Frontend Mentor",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} ${fraunces.variable}`}>
				{children}
			</body>
		</html>
	);
}
