import "./globals.css";
import { Overpass } from "next/font/google";

const overpass = Overpass({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Interactive Rating Card",
	description:
		"An interactive rating card built with Tailwind for Frontend Mentor",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={overpass.className}>{children}</body>
		</html>
	);
}
