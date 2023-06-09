import './globals.css';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Social Proof Section',
	description: 'A social proof section built with Tailwind for Frontend Mentor',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={leagueSpartan.className}>{children}</body>
		</html>
	);
}
