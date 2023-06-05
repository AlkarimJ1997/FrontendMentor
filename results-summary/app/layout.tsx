import './globals.css';
import { Hanken_Grotesk } from 'next/font/google';

const hankenGrotesk = Hanken_Grotesk({
	weight: ['500', '700', '800'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Results Summary Component',
	description: 'A newbie results summary component from Frontend Mentor',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={hankenGrotesk.className}>{children}</body>
		</html>
	);
}
