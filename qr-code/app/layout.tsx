import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "QR Code Card",
	description: "A QR code card built with Tailwind CSS for Frontend Mentor",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={outfit.className}>{children}</body>
		</html>
	);
}
