import './globals.css';
import { Kumbh_Sans } from 'next/font/google';

const kumbhSans = Kumbh_Sans({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'FAQ Accordion Card',
	description: 'A FAQ accordion card built with Tailwind for Frontend Mentor',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={kumbhSans.className}>{children}</body>
		</html>
	);
}
