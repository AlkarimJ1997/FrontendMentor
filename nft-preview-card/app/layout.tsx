import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
	weight: ['300', '400', '600'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'NFT Preview Card',
	description: 'A NFT preview card built with Tailwind for Frontend Mentor',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={outfit.className}>{children}</body>
		</html>
	);
}
