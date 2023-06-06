import './globals.css';
import { Red_Hat_Display } from 'next/font/google';

const redHatDisplay = Red_Hat_Display({
	weight: ['500', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Order Summary Card',
	description: 'An order summary card built with Tailwind for Frontend Mentor',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={redHatDisplay.className}>{children}</body>
		</html>
	);
}
